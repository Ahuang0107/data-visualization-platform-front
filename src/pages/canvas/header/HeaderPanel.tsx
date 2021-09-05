import React from "react";
import styled from "styled-components";
import {
    BackIcon,
    BrowserIcon,
    PublishIcon,
    SaveIcon
} from "../../../assets/icon";
import {History, LocationState} from "history";
import {RectangleStateButton, RectangleButton, LayerIcon, SideBarIcon, ModuleIcon} from 'confused'

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
    }>>,
    history: History<LocationState>
}): JSX.Element {
    const {setPanelShow, panelShow, saveCanvas} = props
    return (
        <WrapperHeader>
            <WrapperButton>
                {/*图层面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, layer: !panelShow.layer})
                }}>
                    <LayerIcon/>
                </RectangleStateButton>
                {/*组件面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, component: !panelShow.component})
                }}>
                    <ModuleIcon/>
                </RectangleStateButton>
                {/*属性面板展开按钮*/}
                <RectangleStateButton onClick={() => {
                    setPanelShow({...panelShow, config: !panelShow.config})
                }}>
                    <SideBarIcon/>
                </RectangleStateButton>
            </WrapperButton>
            <TitleWrap>
                <BackIcon onClick={() => props.history.push('/Home')}/>
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
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  font-size: 14px;
  color: inherit;
  padding-bottom: 2px;
`
