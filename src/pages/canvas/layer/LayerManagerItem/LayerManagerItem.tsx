import React, {useState} from "react";
import {Element} from "../../../../interface/entity";

export default function LayerManagerItem(props: {
    element: Element
    show?: boolean
    retract?: number
}): JSX.Element {
    const [showSubItem, setShowSubItem] = useState<boolean>(false)
    return (
        <>

        </>
    )
}
