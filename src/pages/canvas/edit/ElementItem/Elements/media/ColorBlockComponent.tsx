import React from "react";
import styled from "styled-components";
import {Element} from "../../../../../../interface/entity";
import {Logo} from "../../../../../../assets/image";

export default function ColorBlockComponent(props: {
    element: Element
}): JSX.Element {

    return (
        <RealColorBlock scale={props.element} src={Logo}/>
    )
}
const RealColorBlock = styled.div<{
    scale: {
        width: number
        height: number
    }
    src: string
}>`
  --border-color: rgba(215, 215, 215, 0.2);
  --content-color: rgba(84, 84, 84, 0.2);
  width: ${(props) => props.scale.width}px;
  height: ${(props) => props.scale.height}px;
  background-image: linear-gradient(0deg, var(--border-color) 0%, var(--border-color) 10%, var(--content-color) 10%, var(--content-color) 90%, var(--border-color) 90%, var(--border-color) 100%);;
  background-size: contain;
`
