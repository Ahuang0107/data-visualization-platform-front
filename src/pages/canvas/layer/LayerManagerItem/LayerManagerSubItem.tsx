import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Element} from "../../../../interface/entity";
import {getLayerIcon} from "./getLayerIcon";
import {LayerItemSpan, LayerManagerItemWrap, LayerManagerThumbnail} from "./common";

export default function LayerManagerSubItem(props: {
    element: Element
    show: boolean
    retract: number
    focusElement: Element | undefined
    setFocusElement: React.Dispatch<React.SetStateAction<Element | undefined>>
}): JSX.Element {
    const {focusElement, setFocusElement} = props
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const icon = getLayerIcon(props.element.type)
    useEffect(() => {
        if (focusElement?.primaryKey === props.element.primaryKey) {
            setIsFocused(true)
        } else {
            setIsFocused(false)
        }
    }, [focusElement])
    return (
        <LayerManagerSubItemWrap show={!props.show} retract={props.retract} isFocused={isFocused} onClick={() => {
            setFocusElement(props.element)
        }}>
            {icon}
            <LayerManagerThumbnail>
                <LayerItemSpan>{props.element.name}</LayerItemSpan>
            </LayerManagerThumbnail>
        </LayerManagerSubItemWrap>
    )
}
const LayerManagerSubItemWrap = styled(LayerManagerItemWrap)<{
    show: boolean
    retract: number
    isFocused: boolean
}>`
  height: ${props => props.show ? '0' : '36px'};
  padding-left: ${(props) => (props.retract + 20)}px;
  background: ${props => props.isFocused ? 'var(--datav-main-click-color)' : 'var(--datav-panel-item-bg)'};

  &:hover {
    background: ${props => props.isFocused ? 'var(--datav-main-click-color)' : 'var(--datav-item-hover-color)'};
  }
`
