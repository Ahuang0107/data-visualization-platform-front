import React from "react";
import styled from "styled-components";
import {Element} from "../../../interface/entity";
import LayerManagerItem from "./LayerManagerItem/LayerManagerItem";
import SquareButton from "./button/SquareButton";
import {
    HideIcon,
    LayerDownBottomIcon,
    LayerDownIcon,
    LayerUpIcon,
    LayerUpTopIcon,
    LockIcon,
    ToFolderIcon,
    TrashIcon
} from "../../../assets/icon";

export default function LayerPanel(props: {
    show?: boolean
    elementList?: Element[] | null
}): JSX.Element {
    const layerElementGroup = props.elementList?.map((element, index) => (
        <LayerManagerItem key={index} element={element} show={true}/>
    ))
    return (
        <LayerPanelWrap show={props.show}>
            <LayerManager>
                <LayerManagerTop>
                    <LayerTitle>图层</LayerTitle>
                    <LayerManagerLayoutSelector>
                    </LayerManagerLayoutSelector>
                </LayerManagerTop>
                <LayerToolbarTop>
                    <SquareButton>
                        <LayerUpIcon/></SquareButton>
                    <SquareButton>
                        <LayerDownIcon/>
                    </SquareButton>
                    <SquareButton>
                        <LayerUpTopIcon/>
                    </SquareButton>
                    <SquareButton>
                        <LayerDownBottomIcon/>
                    </SquareButton>
                </LayerToolbarTop>
                <LayerManagerWrap>
                    {layerElementGroup}
                </LayerManagerWrap>
                <LayerToolbarBottom>
                    <ToFolderIcon/>
                    <TrashIcon/>
                    <LockIcon/>
                    <HideIcon/>
                </LayerToolbarBottom>
            </LayerManager>
        </LayerPanelWrap>
    )
}
const LayerPanelWrap = styled.div<{
    show?: boolean
}>`
  flex: none;
  position: relative;
  width: ${(props) => props.show ? "200px" : "0"};
  height: 100%;
  background: #1d1f26;
  display: flex;
  flex-direction: column;
  transition: width .3s ease;
  z-index: 5;
  overflow: hidden;
  border-right: ${(props) => props.show ? "1px solid #000" : "none"};
`
const LayerManager = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  overflow: hidden;
  flex: auto;
  z-index: 9;
  transition: .3s ease;
`
/**
 * 顶层的title以及图层展示方式按钮
 */
const LayerManagerTop = styled.div`
  background: var(--datav-panel-title-bg);
  height: 30px;
  color: #bcc9d4;
  line-height: 30px;
  position: relative;
  user-select: none;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LayerTitle = styled.div`
  line-height: 30px;
  vertical-align: middle;
`
const LayerManagerLayoutSelector = styled.div`
  display: flex;
  align-items: center;
`
/**
 * 顶层的图层上移下移按钮
 */
const LayerToolbarTop = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 18px;
  background: #20242a;
  flex: none;
  border-bottom: 1px solid var(--datav-panel-border-color);
`
/**
 * 中间展示图层信息
 */
const LayerManagerWrap = styled.div`
  width: 100%;
  height: 100%;
  flex: auto;
  color: #bcc9d4;
  font-size: 12px;
  list-style: none;
  line-height: 2;
  user-select: none;
  position: relative;
  background: var(--datav-panel-color);

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: block;
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #434b55;
    border: 1px solid #434b55;
  }

  ::-webkit-scrollbar-track {
    background: var(--datav-scroll-track-bg);
  }
`
/**
 * 底部对图层的一些操作按钮，成组、删除、锁定、隐藏
 */
const LayerToolbarBottom = styled.div`
  height: 30px;
  padding: 0 18px;
  background: #20242a;
  flex: none;
  border-top: 1px solid var(--datav-panel-border-color);

  display: flex;
  align-items: center;
  justify-content: space-around;
`
