import React from "react";
import styled from "styled-components";
import {ElementType} from "../../../interface/enum";
import {ColorBlock, DigitalCardFlipper, GeneralTitle, SingleImage} from "../../../assets/image";
import ComponentItem from "./ComponentItem/ComponentItem";

export default function ComponentPanel(props: {
    show?: boolean
    addElement: (type: ElementType) => void
}): JSX.Element {
    const {addElement} = props
    const componentList = [
        {
            name: '单张图片',
            type: ElementType.SINGLE_IMAGE,
            img: SingleImage,
        },
        {
            name: '自定义背景块',
            type: ElementType.COLOR_BLOCK,
            img: ColorBlock,
        },
        {
            name: '通用标题',
            type: ElementType.GENERAL_TITLE,
            img: GeneralTitle,
        },
        {
            name: '数字翻牌器',
            type: ElementType.DIGITAL_CARD_FLIPPER,
            img: DigitalCardFlipper,
        },
        {
            name: '折线柱图',
            type: ElementType.BAR_WITH_BACKGROUND,
            img: DigitalCardFlipper,
        },
        {
            name: '折线图',
            type: ElementType.MULTIPLE_X_AXES,
            img: DigitalCardFlipper,
        },
        {
            name: '饼图',
            type: ElementType.DOUGHNUT_CHART_WITH_ROUNDED_CORNER,
            img: DigitalCardFlipper,
        },
        {
            name: '气泡图',
            type: ElementType.BUBBLE_CHART,
            img: DigitalCardFlipper,
        },
    ]
    const componentItems = componentList.map((element, index) => (
        <ComponentItem key={index}
                       name={element.name}
                       type={element.type}
                       img={element.img}
                       onClick={() => addElement(element.type)}/>
    ))
    return (
        <ComponentPanelWrap show={props.show}>
            <ComponentManager>
                <TopTitlePanel>
                    <TopTitle>资产列表</TopTitle>
                </TopTitlePanel>
                <PackageSelectWrap>
                    <Select>
                        <Option value="all">全部可用组件</Option>
                    </Select>
                </PackageSelectWrap>
                <ShowComponentPanel>
                    {componentItems}
                </ShowComponentPanel>
            </ComponentManager>
        </ComponentPanelWrap>
    )
}

const ComponentPanelWrap = styled.div<{
    show?: boolean
}>`
  flex: none;
  width: ${(props) => props.show ? "233px" : "0"};
  height: 100%;
  background: var(--datav-panel-color);
  z-index: 4;
  transition: width .3s ease;
  overflow: hidden;
  box-shadow: 1px 0 #000;
`;

const ComponentManager = styled.div`
  width: 233px;
  transition: .3s ease;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  user-select: none;
`

const TopTitlePanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  background: var(--datav-panel-title-bg);
  color: #bcc9d4;
  padding: 10px;
  user-select: none;
`
const TopTitle = styled.span`
  color: inherit;
`

const PackageSelectWrap = styled.div`
  flex: none;
  height: 40px;
  width: 100%;
  background: #1d2127;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Select = styled.select`
  flex: none;
  height: 28px;
  width: 222px;
  background: #262c33;
  border: 1px solid #000;
  color: #bcc9d4;
  font-size: 12px;
`

const Option = styled.option`
  font-size: 12px;
`

const ShowComponentPanel = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--datav-panel-background-dark-color);
  align-items: center;

  overflow-y: scroll;
`
