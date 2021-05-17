import React from "react";
import styled from "styled-components";
import {Element} from "../../../../../../interface/entity";

export default function GeneralTitleComponent(props: {
    element: Element
}): JSX.Element {

    return (
        <RealTitle element={props.element}>{props.element.generalTitle?.content ?? ""}</RealTitle>
    )
}
const RealTitle = styled.h1 <{
    element: Element
}>`
  width: ${(props) => props.element.width ?? 200}px;
  height: ${(props) => props.element.height ?? 120}px;

  color: aliceblue;
  font-family: ${(props) => props.element.generalTitle?.fontFamily}, serif;
  font-size: ${(props) => props.element.generalTitle?.fontSize}px;
  line-height: 1.2;
  vertical-align: center;
`
