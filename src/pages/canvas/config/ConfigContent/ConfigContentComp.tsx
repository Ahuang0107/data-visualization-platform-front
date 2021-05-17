import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import styled from "styled-components";
import {Element} from "../../../../interface/entity";
import {ElementType} from "../../../../interface/enum";
import GeneralTitleConfig from "../ConfigPages/GeneralTitleConfig";
import SingleImageConfig from "../ConfigPages/SingleImageConfig";
import ColorBlockConfig from "../ConfigPages/ColorBlockConfig";
import DigitalCardFlipperConfig from "../ConfigPages/DigitalCardFlipperConfig";
import BarWithBackgroundConfig from "../ConfigPages/BarWithBackgroundConfig";
import BarWithBackgroundDatabase from "../DatabasePages/BarWithBackgroundDatabase";
import ComponentTitle from "../ConfigPages/form/ComponentTitle";
import ConfigManagerTabs from "../ConfigTab/ConfigManagerTabs";

export default function ConfigContentComp(props: {
    focusElement: Element | any
    updateElementNode: (data: Element) => void
    setDrawerShow: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
    const {focusElement, updateElementNode, setDrawerShow} = props
    // 当前显示的tab面板编号
    const [activeTab, setActiveTab] = useState(1)
    // 根据当前聚焦的元素生成对应的属性面板
    let pageContent = getPageContent(activeTab)
    useEffect(() => {
        pageContent = getPageContent(activeTab)
    }, [focusElement])

    function getPageContent(activeTab: number) {
        switch (activeTab) {
            case 1:
                return getPageConfig(focusElement)
            case 2:
                return getPageDatabase(focusElement)
            case 3:
                return <></>
        }
    }

    function getPageConfig(element: Element) {
        switch (element.type) {
            case ElementType.GENERAL_TITLE:
                return <GeneralTitleConfig element={element} updateElementNode={updateElementNode}/>
            case ElementType.SINGLE_IMAGE:
                return <SingleImageConfig element={element} updateElementNode={updateElementNode}/>
            case ElementType.COLOR_BLOCK:
                return <ColorBlockConfig element={element} updateElementNode={updateElementNode}/>
            case ElementType.DIGITAL_CARD_FLIPPER:
                return <DigitalCardFlipperConfig element={element} updateElementNode={updateElementNode}/>
            case ElementType.BAR_WITH_BACKGROUND:
                return <BarWithBackgroundConfig element={element} updateElementNode={updateElementNode}/>
            default:
                return <></>
        }
    }

    function getPageDatabase(element: Element) {
        switch (element.type) {
            case ElementType.BAR_WITH_BACKGROUND:
                return <BarWithBackgroundDatabase element={element}
                                                  updateElementNode={updateElementNode}
                                                  setDrawerShow={setDrawerShow}/>
            default:
                return <></>
        }
    }

    return (
        <>
            <ConfigManagerTabs activeTab={activeTab}
                               updateActiveTab={setActiveTab}/>
            <ConfigManagerBody>
                <PageConfig>
                    <ComponentTitle name={focusElement.name}/>
                    {pageContent}
                </PageConfig>
            </ConfigManagerBody>
        </>
    )
}
const ConfigManagerBody = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -36px;
  padding-top: 36px;
`

const PageConfig = styled.div`
  height: 100%;
  overflow-y: scroll;
  position: relative;

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
