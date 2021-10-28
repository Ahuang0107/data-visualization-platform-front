import React, {useEffect, useState} from "react";
import {YesOrNoOption} from "../../../../interface/data";
import SelectProperty from "./form/SelectProperty";
import SingleInputProperty from "./form/SingleInputProperty";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import {Element} from "../../../../interface/entity";
import SingleInputPropertyWithAddMinus from "./form/SingleInputPropertyWithAddMinus";

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
            <SingleInputPropertyWithAddMinus title={"翻牌器数字字号"}
                                             value={element.digitalCardFlipper?.size}
                                             changeValue={(size?: number) => {
                                                 setElement({
                                                     ...element, digitalCardFlipper: {
                                                         ...element.digitalCardFlipper,
                                                         size: size
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
            <SingleInputPropertyWithAddMinus title={"标题字号"}
                                             value={element.digitalCardFlipper?.title?.constSize}
                                             changeValue={(constSize?: number) => {
                                                 setElement({
                                                     ...element, digitalCardFlipper: {
                                                         ...element.digitalCardFlipper,
                                                         title: {
                                                             ...element.digitalCardFlipper?.title,
                                                             constSize: constSize
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
            <SingleInputProperty title={"前缀"}
                                 content={element.digitalCardFlipper?.prefix?.content}
                                 changeContent={(content?: string) => {
                                     setElement({
                                         ...element, digitalCardFlipper: {
                                             ...element.digitalCardFlipper,
                                             prefix: {
                                                 content: content
                                             }
                                         }
                                     })
                                 }}/>
            <SingleInputProperty title={"后缀"}
                                 content={element.digitalCardFlipper?.suffix?.content}
                                 changeContent={(content?: string) => {
                                     setElement({
                                         ...element, digitalCardFlipper: {
                                             ...element.digitalCardFlipper,
                                             suffix: {
                                                 content: content
                                             }
                                         }
                                     })
                                 }}/>
        </>
    )
}
