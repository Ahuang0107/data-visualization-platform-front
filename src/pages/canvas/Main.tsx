import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {Element} from "../../interface/entity"
import {ElementType} from "../../interface/enum";
import {generateUUID} from "../../utils";
import HeaderPanel from "./header/HeaderPanel";
import LayerPanel from "./layer/LayerPanel";
import ComponentPanel from "./component/ComponentPanel";
import EditPanel from "./edit/EditPanel";
import ConfigPanel from "./config/ConfigPanel";
import Drawer from "../drawer/Drawer";

export default function Main(): JSX.Element {
    //管理大屏编辑页面的面板展开
    const [panelShow, setPanelShow] = useState({
        layer: true,
        component: true,
        config: true
    })
    //管理画布本身的属性
    const [property, setProperty] = useState({})
    //管理画布上的元素列表
    const [elementList, setElementList] = useState<Element[]>([])
    //管理画布上当前聚焦的元素
    const [focusElement, setFocusElement] = useState({})
    //管理抽屉面板的展开
    const [drawerShow, setDrawerShow] = useState(false)

    useEffect(() => {
        getElementListData()
    }, [])

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
        setElementList([...elementList, element])
    }

    // 根据大屏ID获取大屏数据
    function getElementListData() {
        axios.get('http://localhost:9090/api/canvas/6087e13c5e6bb67f72435aea')
            .then(function (response) {
                if (response.status == 200) {
                    setProperty(response.data.property)
                    setElementList(response.data.elements)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <MainPanel>
            <HeaderPanel panelShow={panelShow} setPanelShow={setPanelShow}/>
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
                {drawerShow ? <Drawer setDrawerShow={setDrawerShow}/> : null}
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
