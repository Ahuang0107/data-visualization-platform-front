import React, {useState} from "react";
import {Rnd} from "react-rnd";
import {Element, Property} from "../../../../interface/entity";
import CustomComponent from "./CustomComponent";

export default function Canvas(props: {
    property: Property | any
    elements: Element[] | null
    focusElement: Element | any
    setFocusElement?: React.Dispatch<React.SetStateAction<Element>>
    updateElementNode: (data: Element) => void
}): JSX.Element {
    const {focusElement, setFocusElement, updateElementNode} = props
    const [scale, setScale] = useState({
        width: 1920,
        height: 1080,
        x: 0,
        y: 0
    })
    const [disableDragging, setDisableDragging] = useState(true)
    const [enableResizing] = useState(false)
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0,0.2)",
        boxShadow: "rgb(0 0 0 / 50%) 0 0 30px 0"
    }
    // document.addEventListener('keydown', function (e) {
    //     if (e.code === 'Space') {
    //         setDisableDragging(false)
    //     }
    // });
    // document.addEventListener('keyup', function (e) {
    //     if (e.code === 'Space') {
    //         setDisableDragging(true)
    //     }
    // });
    const elementList = props.elements?.map((element, index) => {
        return <CustomComponent key={index} element={element}
                                focusElement={focusElement}
                                setFocusElement={setFocusElement}
                                updateElementNode={updateElementNode}/>
    })
    return (
        <Rnd style={style}
             size={{width: scale.width, height: scale.height}}
             position={{x: scale.x, y: scale.y}}
            // onDragStop={(e, d) => {
            //     setScale({...scale, x: d.lastX, y: d.lastY});
            // }}
            // onResizeStop={(e, direction, ref, delta, position) => {
            //     setScale({
            //         width: Number(ref.style.width),
            //         height: Number(ref.style.height),
            //         ...position
            //     });
            // }}
             disableDragging={disableDragging}
             enableResizing={enableResizing}
        >
            {elementList}
        </Rnd>
    )
}
