import React from "react";
import styled from "styled-components";
import {CanvasInfo} from "../../../interface/entity/CanvasInfo";
import {History, LocationState} from "history";
import {CardCommonWrap} from "./Common";

export default function Card(props: {
    history: History<LocationState>
    children?: React.ReactNode
    content: CanvasInfo
}): JSX.Element {

    return (
        <CardCommonWrap onClick={() => {
            props.history.push('/Main/' + props.content.id)
        }}>
            <CardTitle>{props.content.property.name}</CardTitle>
        </CardCommonWrap>
    )
}
const CardTitle = styled.h1`
  color: var(--datav-font-color);
`
