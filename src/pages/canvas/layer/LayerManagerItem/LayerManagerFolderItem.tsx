import React from "react";
import styled from "styled-components";
import {Element} from "../../../../interface/entity";
import {LayerItemSpan, LayerManagerItemWrap, LayerManagerThumbnail} from "./common";
import {FolderIcon, FolderOpenIcon, FoldIcon} from "../../../../assets/icon";

export default function LayerManagerFolderItem(props: {
    element: Element
    fold: boolean
    onClick?: React.MouseEventHandler<SVGElement>
    show: boolean
    retract: number
}): JSX.Element {

    return (
        <LayerManagerFolderWrap show={!props.show} retract={props.retract}>
            <FoldIcon fold={props.fold} onClick={props.onClick}/>
            {props.fold ? <FolderOpenIcon onClick={props.onClick}/> : <FolderIcon onClick={props.onClick}/>}
            <LayerManagerThumbnail>
                <LayerItemSpan>{props.element.name}</LayerItemSpan>
            </LayerManagerThumbnail>
        </LayerManagerFolderWrap>
    )
}
const LayerManagerFolderWrap = styled(LayerManagerItemWrap)<{
    show: boolean
    retract: number
}>`
  height: ${(props) => (props.show ? '0' : '48px')};
  padding-left: ${(props) => (props.retract + 6)}px;
`
