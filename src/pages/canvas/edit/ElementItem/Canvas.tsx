import React from "react";
import {Rnd} from "react-rnd";
import {Element, Property} from "../../../../interface/entity";
import CustomComponent from "./CustomComponent";

export default function Canvas(props: {
    property: Property
    elements: Element[] | null
    focusElement: Element | undefined
    setFocusElement: React.Dispatch<React.SetStateAction<Element | undefined>>
    updateElementNode: (data: Element) => void
}): JSX.Element {
    const {focusElement, setFocusElement, updateElementNode} = props
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: props.property.backgroundColor,
        boxShadow: "rgb(0 0 0 / 50%) 0 0 30px 0"
    }
    const elementList = props.elements?.map((element, index) => {
        return <CustomComponent key={index} element={element}
                                focusElement={focusElement}
                                setFocusElement={setFocusElement}
                                updateElementNode={updateElementNode}/>
    })
    return (
        <Rnd style={style}
             size={{width: props.property?.width ?? 0, height: props.property?.height ?? 0}}
             disableDragging={true}
             enableResizing={false}
        >
            {elementList}
        </Rnd>
    )
}
