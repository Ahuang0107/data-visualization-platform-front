import React from "react";
import styled from "styled-components";
import RectangleStateButton from "./button/RectangleStateButton";
import {
    BackIcon,
    BrowserIcon,
    ComponentPanelIcon,
    ConfigPanelIcon,
    LayerPanelIcon,
    PublishIcon,
    SaveIcon
} from "../../../assets/icon";
import RectangleButton from "./button/RectangleButton";

export default function HeaderPanel(props: {
    name?: String,
    projectId?: String,
    saveCanvas: () => void,
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
    const {setPanelShow, panelShow, saveCanvas} = props
    return (
        <WrapperHeader>
            <WrapperButton>
                {/*图层面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, layer: !panelShow.layer})
                }}>
                    <LayerPanelIcon/>
                </RectangleStateButton>
                {/*组件面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, component: !panelShow.component})
                }}>
                    <ComponentPanelIcon/>
                </RectangleStateButton>
                {/*属性面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, config: !panelShow.config})
                }}>
                    <ConfigPanelIcon/>
                </RectangleStateButton>
            </WrapperButton>
            <TitleWrap>
                <BackIcon/>
                <Title>{props.name}</Title>
            </TitleWrap>
            <WrapperButton>
                {/*保存按钮*/}
                <RectangleButton onClick={() => {
                    saveCanvas()
                }}>
                    <SaveIcon/>
                </RectangleButton>
                {/*浏览按钮*/}
                <RectangleButton onClick={() => {
                    window.open('http://localhost:3000/Preview/' + props.projectId)
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
const TitleWrap = styled.div`

`
const Title = styled.p`
  font-size: 14px;
  color: inherit;
`
