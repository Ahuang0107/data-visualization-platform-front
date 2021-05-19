import React, {useEffect, useState} from "react";
import {Rnd} from "react-rnd"
import {Element} from "../../../../interface/entity";
import {ElementType} from "../../../../interface/enum";
import DigitalCardFlipperComponent from "./Elements/media/DigitalCardFlipperComponent";
import GeneralTitleComponent from "./Elements/text/GeneralTitleComponent";
import SingleImageComponent from "./Elements/media/SingleImageComponent";
import ColorBlockComponent from "./Elements/media/ColorBlockComponent";
import BubbleChart from "./Elements/echarts/scatter/BubbleChart";
import DoughnutChartWithRoundedCorner from "./Elements/echarts/pie/DoughnutChartWithRoundedCorner";
import MultipleXAxes from "./Elements/echarts/line/MultipleXAxes";
import BarWithBackground from "./Elements/echarts/bar/BarWithBackground";
import {removePx} from "../../../../utils";

export default function CustomComponent(props: {
    element: Element
    focusElement: Element | undefined
    setFocusElement: React.Dispatch<React.SetStateAction<Element | undefined>>
    updateElementNode: (data: Element) => void
}): JSX.Element {
    const {focusElement, setFocusElement, updateElementNode} = props
    const [element, setElement] = useState(props.element)
    const [showDashed, setShowDashed] = useState(false)

    useEffect(() => {
        updateElementNode(element)
    }, [element])
    useEffect(() => {
        if (focusElement?.primaryKey === element.primaryKey) {
            //todo("这里的setElement会影响设置了config后画布上的元素会不会响应变化，还不清楚为什么不能删")
            setElement(focusElement)
            setShowDashed(true)
        } else {
            setShowDashed(false)
        }
    }, [focusElement])
    const style = {
        outline: showDashed ? 'aquamarine 1px dashed' : ''
    }
    const type = props.element.type
    let chartNode = null
    switch (type) {
        case ElementType.BAR_WITH_BACKGROUND:
            chartNode = <BarWithBackground element={props.element}/>
            break
        case ElementType.MULTIPLE_X_AXES:
            chartNode = <MultipleXAxes element={props.element}/>
            break
        case ElementType.DOUGHNUT_CHART_WITH_ROUNDED_CORNER:
            chartNode = <DoughnutChartWithRoundedCorner element={props.element}/>
            break
        case ElementType.BUBBLE_CHART:
            chartNode = <BubbleChart element={props.element}/>
            break
        case ElementType.COLOR_BLOCK:
            chartNode = <ColorBlockComponent element={props.element}/>
            break
        case ElementType.SINGLE_IMAGE:
            chartNode = <SingleImageComponent element={props.element}/>
            break
        case ElementType.GENERAL_TITLE:
            chartNode = <GeneralTitleComponent element={element}/>
            break
        case ElementType.DIGITAL_CARD_FLIPPER:
            chartNode = <DigitalCardFlipperComponent element={element}/>
            break
        case ElementType.FOLDER: {
            const subItem = props.element.subItem
            const subItemNodes = subItem?.map((element, index) => {
                return <CustomComponent key={index} element={element}
                                        focusElement={focusElement}
                                        setFocusElement={setFocusElement}
                                        updateElementNode={updateElementNode}/>
            })
            return (
                <>
                    {subItemNodes}
                </>
            )
        }
    }
    return (
        <Rnd style={style}
             size={{width: element.width, height: element.height}}
             position={{x: element.x, y: element.y}}
             bounds={'parent'}
             onDragStop={(e, d) => {
                 setElement({...element, x: d.x, y: d.y})
             }}
             onResizeStop={(e, direction, ref, delta, position) => {
                 setElement({
                     ...element,
                     width: removePx(ref.style.width),
                     height: removePx(ref.style.height),
                     ...position
                 })
             }}
        >
            {chartNode}
        </Rnd>
    )
}
