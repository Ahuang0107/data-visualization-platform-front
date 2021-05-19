import React from "react";
import {Rnd} from "react-rnd";
import {Element, Property} from "../../interface/entity";
import PreviewElement from "./PreviewElement";

export default function PreviewCanvas(props: {
    property: Property | undefined
    elements: Element[]
}): JSX.Element {
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0,0.2)",
        boxShadow: "rgb(0 0 0 / 50%) 0 0 30px 0"
    }
    const elementList = props.elements?.map((element, index) => {
        return <PreviewElement key={index} element={element}/>
    })
    return (
        <Rnd style={style}
             size={{width: props.property?.width ?? 0, height: props.property?.height ?? 0}}
             position={{x: 0, y: 0}}
             disableDragging={true}
             enableResizing={false}
        >
            {elementList}
        </Rnd>
    )
}

