import React, {useState} from "react";
import {Rnd} from "react-rnd";
import {Element} from "../../interface/entity";
import {ElementType} from "../../interface/enum";
import BarWithBackground from "../canvas/edit/ElementItem/Elements/echarts/bar/BarWithBackground";
import MultipleXAxes from "../canvas/edit/ElementItem/Elements/echarts/line/MultipleXAxes";
import DoughnutChartWithRoundedCorner
    from "../canvas/edit/ElementItem/Elements/echarts/pie/DoughnutChartWithRoundedCorner";
import BubbleChart from "../canvas/edit/ElementItem/Elements/echarts/scatter/BubbleChart";
import ColorBlockComponent from "../canvas/edit/ElementItem/Elements/media/ColorBlockComponent";
import SingleImageComponent from "../canvas/edit/ElementItem/Elements/media/SingleImageComponent";
import GeneralTitleComponent from "../canvas/edit/ElementItem/Elements/text/GeneralTitleComponent";
import DigitalCardFlipperComponent from "../canvas/edit/ElementItem/Elements/media/DigitalCardFlipperComponent";

export default function PreviewElement(props: {
    element: Element
}): JSX.Element {
    const [element, setElement] = useState(props.element)

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
                return <PreviewElement key={index} element={element}/>
            })
            return (
                <>
                    {subItemNodes}
                </>
            )
        }
    }
    return (
        <Rnd size={{width: element.width, height: element.height}}
             position={{x: element.x, y: element.y}}
             bounds={'parent'}
        >
            {chartNode}
        </Rnd>
    )
}
