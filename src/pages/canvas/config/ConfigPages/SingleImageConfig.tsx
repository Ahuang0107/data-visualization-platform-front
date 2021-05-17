import React, {useEffect, useState} from "react";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import {Element} from "../../../../interface/entity";

export default function SingleImageConfig(props: {
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

    function changeWidthAndHeight(width?: number, height?: number) {
        setElement({...element, width: width, height: height})
    }

    function changeXAndY(x?: number, y?: number) {
        setElement({...element, x: x, y: y})
    }

    return (
        <>
            <DoubleInputPropertyWithAddMinus title={"图表尺寸"} numbers={{
                number1: element.width,
                number2: element.height
            }} changeNumbers={changeWidthAndHeight}/>
            <DoubleInputPropertyWithAddMinus title={"图表位置"} numbers={{
                number1: element.x,
                number2: element.y
            }} changeNumbers={changeXAndY}/>
        </>
    )
}
