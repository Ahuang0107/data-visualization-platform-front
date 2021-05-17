import React from "react";
import styled from "styled-components";
import {Element} from "../../../../../../interface/entity";
import {Logo} from "../../../../../../assets/image";

export default function SingleImageComponent(props: {
    element: Element
}): JSX.Element {

    return (
        <RealSingleImage scale={props.element} src={Logo}/>
    )
}
const RealSingleImage = styled.div<{
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
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`
