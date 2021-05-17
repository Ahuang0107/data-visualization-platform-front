import React, {useEffect, useState} from "react";
import {YesOrNoOption} from "../../../../interface/data";
import SelectProperty from "./form/SelectProperty";
import SingleInputProperty from "./form/SingleInputProperty";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import {Element} from "../../../../interface/entity";

export default function DigitalCardFlipperConfig(props: {
    element: Element | any
    updateElementNode: (data: Element) => void
}): JSX.Element {
    const {updateElementNode} = props
    const [element, setElement] = useState(props.element)
    useEffect(() => {
        setElement(props.element)
    }, [props.element])
    useEffect(() => {
        updateElementNode(element)
    }, [element])
    return (
        <>
            <DoubleInputPropertyWithAddMinus title={"图表尺寸"}
                                             numbers={{
                                                 number1: element.width,
                                                 number2: element.height
                                             }}
                                             changeNumbers={(width?: number, height?: number) => {
                                                 setElement({...element, width: width, height: height})
                                             }}/>
            <DoubleInputPropertyWithAddMinus title={"图表位置"}
                                             numbers={{
                                                 number1: element.x,
                                                 number2: element.y
                                             }}
                                             changeNumbers={(x?: number, y?: number) => {
                                                 setElement({...element, x: x, y: y})
                                             }}/>
            <SingleInputProperty title={"翻牌器数字"}
                                 content={element.digitalCardFlipper?.content}
                                 changeContent={(content?: string) => {
                                     setElement({
                                         ...element, digitalCardFlipper: {
                                             ...element.digitalCardFlipper,
                                             content: content
                                         }
                                     })
                                 }}/>
            <SingleInputProperty title={"标题"}
                                 content={element.digitalCardFlipper?.title?.content}
                                 changeContent={(content?: string) => {
                                     setElement({
                                         ...element, digitalCardFlipper: {
                                             ...element.digitalCardFlipper,
                                             title: {
                                                 ...element.digitalCardFlipper?.title,
                                                 content: content
                                             }
                                         }
                                     })
                                 }}/>
            <SelectProperty title={"顶部标题"}
                            option={YesOrNoOption}
                            value={element.digitalCardFlipper?.title?.isTop}
                            changeValue={(value?: number | string | boolean) => {
                                setElement({
                                    ...element, digitalCardFlipper: {
                                        ...element.digitalCardFlipper,
                                        title: {
                                            ...element.digitalCardFlipper?.title,
                                            isTop: value
                                        }
                                    }
                                })
                            }}/>
        </>
    )
}
