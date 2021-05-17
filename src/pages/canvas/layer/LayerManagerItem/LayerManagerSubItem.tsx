import React from "react";
import styled from "styled-components";
import {Element} from "../../../../interface/entity";
import {getLayerIcon} from "./getLayerIcon";
import {LayerItemSpan, LayerManagerItemWrap, LayerManagerThumbnail} from "./common";

export default function LayerManagerSubItem(props: {
    element: Element
    show: boolean
    retract: number
}): JSX.Element {
    const icon = getLayerIcon(props.element.type)
    return (
        <LayerManagerSubItemWrap show={!props.show} retract={props.retract}>
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
}>`
  height: ${props => props.show ? '0' : '36px'};
  padding-left: ${(props) => (props.retract + 20)}px;
`
