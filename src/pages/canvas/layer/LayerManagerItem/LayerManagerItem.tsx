import React, {useState} from "react";
import {Element} from "../../../../interface/entity";
import LayerManagerSubItem from "./LayerManagerSubItem";
import LayerManagerFolderItem from "./LayerManagerFolderItem";
import {ElementType} from "../../../../interface/enum";

export default function LayerManagerItem(props: {
    element: Element
    show?: boolean
    retract?: number
    focusElement: Element | null
    setFocusElement: React.Dispatch<React.SetStateAction<Element | null>>
}): JSX.Element {
    const {focusElement, setFocusElement} = props
    const [showSubItem, setShowSubItem] = useState<boolean>(false)
    if (props.element.type === ElementType.FOLDER) {
        const subItemNodes = props.element.subItem?.map((element, index) => (
            <LayerManagerItem key={index}
                              show={showSubItem}
                              element={element}
                              retract={(props.retract ?? 0) + 10}
                              focusElement={focusElement}
                              setFocusElement={setFocusElement}/>
        ))
        return (
            <>
                <LayerManagerFolderItem show={props.show ?? true}
                                        fold={showSubItem}
                                        element={props.element}
                                        onClick={() => {
                                            setShowSubItem(!showSubItem)
                                        }}
                                        retract={props.retract ?? 0}/>
                {subItemNodes}
            </>
        )
    } else if (props.show) {
        return (
            <LayerManagerSubItem element={props.element}
                                 show={props.show}
                                 retract={props.retract ?? 0}
                                 focusElement={focusElement}
                                 setFocusElement={setFocusElement}/>
        )
    }
    return (
        <></>
    )
}
