import React from "react";
import styled from "styled-components";
import {Element} from "../../../../../../interface/entity";

export default function DigitalCardFlipperComponent(props: {
    element: Element
}): JSX.Element {
    if (props.element.digitalCardFlipper?.title.isTop) {
        return (
            <Panel width={props.element.width} height={props.element.height}>
                <Title>{props.element.digitalCardFlipper?.title.content}</Title>
                <Flipper
                    size={props.element.digitalCardFlipper.size}
                >{props.element.digitalCardFlipper?.content}</Flipper>
            </Panel>
        )
    } else {
        return (
            <Panel width={props.element.width} height={props.element.height}>
                <Flipper
                    size={props.element.digitalCardFlipper?.size}
                >{props.element.digitalCardFlipper?.content}</Flipper>
                <Title>{props.element.digitalCardFlipper?.title.content}</Title>
            </Panel>
        )
    }
}

const Panel = styled.div<{
    width: number
    height: number
}>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`
const Title = styled.p`
  color: aliceblue;
  font-size: 24px;
  line-height: 1.2;
  vertical-align: center;
`
const Flipper = styled.p<{
    size?: number
}>`
  color: aliceblue;
  font-size: ${props => props.size ?? 24}px;
  line-height: 1.5;
  vertical-align: center;
`
