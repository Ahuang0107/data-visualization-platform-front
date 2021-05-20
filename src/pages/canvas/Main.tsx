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
import {History, LocationState} from "history";

const emptyProperty: Property = {
    name: "",
    width: 1920,
    height: 1080,
    backgroundColor: "",
}
export default function Main(props: {
    history: History<LocationState>
}): JSX.Element {
    let {id} = useParams<{ id: string }>()
    //管理大屏编辑页面的面板展开
    const [panelShow, setPanelShow] = useState({
        layer: true,
        component: true,
        config: true
    })
    //管理画布本身的属性
    const [property, setProperty] = useState<Property>(emptyProperty)
    //管理画布上的元素列表
    const [elementList, setElementList] = useState<Element[]>([])
    //管理画布上当前聚焦的元素
    const [focusElement, setFocusElement] = useState<Element | null>(null)
    //管理抽屉面板的展开
    const [drawerShow, setDrawerShow] = useState(false)

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
        if (type === ElementType.DIGITAL_CARD_FLIPPER) {
            element.digitalCardFlipper = {
                content: "299,998",
                size: 32,
                title: {
                    content: "翻牌器标题",
                    constSize: 16,
                    isTop: true,
                },
                prefix: {
                    content: "总计"
                },
                suffix: {
                    content: "万"
                }
            }
        }
        if (type === ElementType.GENERAL_TITLE) {
            element.generalTitle = {
                content: "标题",
                fontFamily: "微软雅黑",
                fontSize: 24,
            }
        }
        setElementList([...elementList, element])
    }

    function updateResponseData(data: any) {
        switch (focusElement?.type) {
            case ElementType.BAR_WITH_BACKGROUND:
                updateBarChartData(data)
                break
            case ElementType.DOUGHNUT_CHART_WITH_ROUNDED_CORNER:
                updatePisChartData(data)
                break
            case ElementType.MULTIPLE_X_AXES:
                updateLineChartData(data)
                break
        }
    }

    // 更新柱状图的数据
    function updateBarChartData(data: any) {
        const xAxisData = data.map((item: any) => item.year)
        const yAxisData = data.map((item: any) => item.data)
        let series: {
            data: number[]
            type: string
        }[] = []
        const dataPropertyList = Object.keys(data[0].data)
        const dataPropertyListNum = Object.keys(data[0].data).length
        let x = 0
        for (x = 0; x < dataPropertyListNum; x++) {
            series.push({
                data: [],
                type: "bar",
            })
        }
        yAxisData.forEach((item: any, index: number) => {
            for (x = 0; x < dataPropertyListNum; x++) {
                series[x].data.push(item[dataPropertyList[x]])
            }
        })
        const barWithBackgroundData = {
            category: {
                data: xAxisData,
            },
            series: series
        }
        const newElement: Element = {
            ...focusElement!!,
            barWithBackground: barWithBackgroundData
        }
        updateElementNode(newElement)
    }

    // 更新折线图的数据
    function updateLineChartData(data: any) {
        const xAxisData = data.map((item: any) => item.year)
        const yAxisData = data.map((item: any) => item.data)
        let series: {
            yCategory: string
            data: number[]
        }[] = []
        const dataPropertyList = Object.keys(data[0].data[0])   //["value", "name"]
        const dataPropertyListNum = data[0].data.length    //2
        let x = 0
        for (x = 0; x < dataPropertyListNum; x++) {
            series.push({
                data: [],
                yCategory: "",
            })
        }
        yAxisData.forEach((item: any, index: number) => {
            item.forEach((item: any, index: number) => {
                series[index].data.push(item[dataPropertyList[0]])
                series[index].yCategory = item[dataPropertyList[1]]
            })
        })
        const multipleXAxesData = {
            xLabelList: xAxisData,
            series: series
        }
        const newElement: Element = {
            ...focusElement!!,
            multipleXAxes: multipleXAxesData
        }
        updateElementNode(newElement)
    }

    // 更新饼图的数据
    function updatePisChartData(data: any) {
        const doughnutChartData = {
            name: data.name,
            data: data.data
        }
        const newElement: Element = {
            ...focusElement!!,
            doughnutChart: doughnutChartData
        }
        updateElementNode(newElement)
    }

    return (
        <MainPanel>
            <HeaderPanel name={property?.name}
                         projectId={id}
                         saveCanvas={saveCanvasData}
                         panelShow={panelShow}
                         setPanelShow={setPanelShow}
                         history={props.history}/>
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
                             setFocusElement={setFocusElement}
                             property={property}
                             setProperty={setProperty}
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
