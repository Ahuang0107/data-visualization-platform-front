import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {Element, Property} from "../../interface/entity"
import {ElementType} from "../../interface/enum";
import {generateUUID} from "../../utils";
import HeaderPanel from "./header/HeaderPanel";
import LayerPanel from "./layer/LayerPanel";
import ComponentPanel from "./component/ComponentPanel";
import EditPanel from "./edit/EditPanel";
import ConfigPanel from "./config/ConfigPanel";
import {useParams} from "react-router-dom";
import Drawer from "../drawer/Drawer";

export default function Main(): JSX.Element {
    let {id} = useParams<{ id: string }>()
    //管理大屏编辑页面的面板展开
    const [panelShow, setPanelShow] = useState({
        layer: true,
        component: true,
        config: true
    })
    //管理画布本身的属性
    const [property, setProperty] = useState<Property>()
    //管理画布上的元素列表
    const [elementList, setElementList] = useState<Element[]>([])
    //管理画布上当前聚焦的元素
    const [focusElement, setFocusElement] = useState<Element>()
    //管理抽屉面板的展开
    const [drawerShow, setDrawerShow] = useState(false)
    //管理每次添加数据源后保存的数据
    const [responseData, setResponseData] = useState<any>()

    useEffect(() => {
        getCanvasData()
    }, [])
    useEffect(() => {
        document.title = property?.name as string
    }, [property])

    // 根据大屏ID获取大屏数据
    function getCanvasData() {
        axios.get('http://localhost:9090/api/canvas/' + id)
            .then(function (response) {
                if (response.status == 200) {
                    if (response.data.code === 200) {
                        setProperty(response.data.data.property)
                        setElementList(response.data.data.elements)
                    } else {
                        alert("获取项目详情出错")
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    // 保存大屏数据
    function saveCanvasData() {
        axios.put('http://localhost:9090/api/canvas/' + id, {
            userId: localStorage.getItem("userId"),
            property: property,
            elements: elementList,
        }).then(function (response) {
            if (response.status == 200) {
                if (response.data.code === 200) {
                    alert("保存项目成功")
                } else {
                    alert("保存项目失败")
                }
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    // 更新画布元素
    function updateElementNode(data: Element) {
        setFocusElement(data)
        const findElementById = function (_treeData: Element) {
            if (_treeData.primaryKey == data.primaryKey) {
                Object.assign(_treeData, data)
            } else {
                if (_treeData.subItem && _treeData.subItem.length > 0) {
                    for (let j = 0; j < _treeData.subItem.length; j++) {
                        findElementById(_treeData.subItem[j])
                    }
                }
            }
        }
        const copyElementList = JSON.parse(JSON.stringify(elementList))
        for (let i = 0; i < elementList.length; i++) {
            findElementById(copyElementList[i])
        }
        setElementList(copyElementList)
    }

    //向画布添加元素
    function addElement(type: ElementType) {
        const element: Element = {
            primaryKey: generateUUID(),
            type: type,
            name: type,
            width: 100,
            height: 100,
            x: 100,
            y: 100,
        }
        if (type === ElementType.BAR_WITH_BACKGROUND) {
            element.barWithBackground = {
                xAxis: {
                    data: ['2018', '2019', '2020', '2021'],
                },
                yAxis: [
                    {
                        data: [400, 200, 10, 180],
                        type: 'bar',
                    },
                    {
                        data: [170, 90, 120, 110],
                        type: 'bar',
                    },
                    {
                        data: [400, 200, 120, 180],
                        type: 'line',
                    },
                ]
            }
        }
        setElementList([...elementList, element])
    }

    function updateResponseData(data: any) {
        const xAxisData = data.map((item: any) => item.year)
        const yAxisData = data.map((item: any) => item.data)
        let totalData: any[] = []
        let maleData: any[] = []
        let femaleData: any[] = []
        let radioData: any[] = []
        yAxisData.forEach((item: any, index: number) => {
            totalData.push(item.total)
            maleData.push(item.male)
            femaleData.push(item.female)
            radioData.push(item.radio)
        })
        const barWithBackgroundData = {
            xAxis: {
                data: xAxisData,
            },
            yAxis: [
                {
                    data: totalData,
                    type: "bar",
                },
                {
                    data: maleData,
                    type: "bar",
                },
                {
                    data: femaleData,
                    type: "bar",
                },
                {
                    data: radioData,
                    type: "line",
                },
            ]
        }
        console.log(barWithBackgroundData)
    }

    return (
        <MainPanel>
            <HeaderPanel name={property?.name}
                         projectId={id}
                         saveCanvas={saveCanvasData}
                         panelShow={panelShow}
                         setPanelShow={setPanelShow}/>
            <EditMain>
                <LayerPanel show={panelShow.layer}
                            elementList={elementList}
                            focusElement={focusElement}
                            setFocusElement={setFocusElement}/>
                <ComponentPanel show={panelShow.component}
                                addElement={addElement}/>
                <EditPanel property={property}
                           elementList={elementList}
                           focusElement={focusElement}
                           setFocusElement={setFocusElement}
                           updateElementNode={updateElementNode}/>
                <ConfigPanel show={panelShow.config}
                             focusElement={focusElement}
                             updateElementNode={updateElementNode}
                             setDrawerShow={setDrawerShow}/>
                {drawerShow ? <Drawer setDrawerShow={setDrawerShow}
                                      saveResponseData={updateResponseData}/> : null}
            </EditMain>
        </MainPanel>
    )
}
const MainPanel = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`
const EditMain = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  overflow: hidden;
`
