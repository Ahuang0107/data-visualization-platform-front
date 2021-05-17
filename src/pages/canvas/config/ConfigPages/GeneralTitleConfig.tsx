import React, {useEffect, useState} from "react";
import {Element} from "../../../../interface/entity";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import SingleInputProperty from "./form/SingleInputProperty";
import SelectProperty from "./form/SelectProperty";
import SingleInputPropertyWithAddMinus from "./form/SingleInputPropertyWithAddMinus";
import {FontFamilyOption} from "../../../../interface/data";

export default function GeneralTitleConfig(props: {
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
            <SingleInputProperty title={"标题名"}
                                 content={element.generalTitle?.content}
                                 changeContent={(content?: string) => {
                                     setElement({
                                         ...element, generalTitle: {
                                             ...element.generalTitle,
                                             content: content
                                         }
                                     })
                                 }}/>
            <SelectProperty title={"字体"}
                            option={FontFamilyOption}
                            value={element.generalTitle?.fontFamily}
                            changeValue={(value?: number | string | boolean) => {
                                setElement({
                                    ...element, generalTitle: {
                                        ...element.generalTitle,
                                        fontFamily: value
                                    }
                                })
                            }}/>
            <SingleInputPropertyWithAddMinus title={"字号"}
                                             value={element.generalTitle?.fontSize}
                                             changeValue={(value?: number) => {
                                                 setElement({
                                                     ...element, generalTitle: {
                                                         ...element.generalTitle,
                                                         fontSize: value
                                                     }
                                                 })
                                             }}/>
        </>
    )
}
