import React from "react";
import styled from "styled-components";
import RectangleButton from "./button/RectangleButton";
import {
    BrowserIcon,
    ComponentPanelIcon,
    ConfigPanelIcon,
    LayerPanelIcon,
    PublishIcon,
    SaveIcon
} from "../../../assets/icon";

export default function HeaderPanel(props: {
    panelShow: {
        layer: boolean,
        component: boolean,
        config: boolean
    },
    setPanelShow: React.Dispatch<React.SetStateAction<{
        layer: boolean,
        component: boolean,
        config: boolean
    }>>
}): JSX.Element {
    const {setPanelShow, panelShow} = props
    return (
        <WrapperHeader>
            <WrapperButton>
                {/*图层面板展开按钮*/}
                <RectangleButton onClick={() => {
                    setPanelShow({...panelShow, layer: !panelShow.layer})
                }}>
                    <LayerPanelIcon/>
                </RectangleButton>
                {/*组件面板展开按钮*/}
                <RectangleButton onClick={() => {
                    setPanelShow({...panelShow, component: !panelShow.component})
                }}>
                    <ComponentPanelIcon/>
                </RectangleButton>
                {/*属性面板展开按钮*/}
                <RectangleButton onClick={() => {
                    setPanelShow({...panelShow, config: !panelShow.config})
                }}>
                    <ConfigPanelIcon/>
                </RectangleButton>
            </WrapperButton>
            <Title>Data-Visualization-Platform</Title>
            <WrapperButton>
                {/*保存按钮*/}
                <RectangleButton onClick={() => {
                    console.log("点击保存按钮")
                }}>
                    <SaveIcon/>
                </RectangleButton>
                {/*浏览按钮*/}
                <RectangleButton onClick={() => {
                    console.log("点击浏览按钮")
                }}>
                    <BrowserIcon/>
                </RectangleButton>
                {/*发布按钮*/}
                <RectangleButton onClick={() => {
                    console.log("点击发布按钮")
                }}>
                    <PublishIcon/>
                </RectangleButton>
            </WrapperButton>
        </WrapperHeader>
    )
}
const WrapperHeader = styled.div`
  position: relative;
  height: 41px;
  padding-right: 8px;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  color: #a1aeb3;
  background: #1d1e1f;
  border-bottom: 1px solid #000;
`
const WrapperButton = styled.div`
  margin: 0 15px;
  display: flex;
`
const Title = styled.p`
  font-size: 14px;
  color: inherit;
`
