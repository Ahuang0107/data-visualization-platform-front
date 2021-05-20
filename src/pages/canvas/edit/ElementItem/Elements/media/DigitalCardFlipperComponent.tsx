import React from "react";
import styled from "styled-components";
import {Element} from "../../../../../../interface/entity";

export default function DigitalCardFlipperComponent(props: {
    element: Element
}): JSX.Element {
    if (props.element.digitalCardFlipper?.title.isTop) {
        return (
            <Panel width={props.element.width} height={props.element.height}>
                <Title constSize={props.element.digitalCardFlipper?.title.constSize}>
                    {props.element.digitalCardFlipper?.title.content}
                </Title>
                <Flipper size={props.element.digitalCardFlipper?.size}
                         prefix={props.element.digitalCardFlipper?.prefix.content}
                         suffix={props.element.digitalCardFlipper?.suffix.content}>
                    {props.element.digitalCardFlipper?.content}
                </Flipper>
            </Panel>
        )
    } else {
        return (
            <Panel width={props.element.width} height={props.element.height}>
                <Flipper size={props.element.digitalCardFlipper?.size}
                         prefix={props.element.digitalCardFlipper?.prefix.content}
                         suffix={props.element.digitalCardFlipper?.suffix.content}>
                    {props.element.digitalCardFlipper?.content}
                </Flipper>
                <Title constSize={props.element.digitalCardFlipper?.title.constSize}>
                    {props.element.digitalCardFlipper?.title.content}
                </Title>
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
const Title = styled.p<{
    constSize?: number
}>`
  color: aliceblue;
  font-size: ${(props) => props.constSize ?? 16}px;
  line-height: 1.2;
  vertical-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Flipper = styled.p<{
    size?: number
    prefix?: string
    suffix?: string
}>`
  color: aliceblue;
  font-size: ${props => props.size ?? 32}px;
  line-height: 1.5;
  vertical-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:before {
    ${props => props.prefix ? `content:'${props.prefix}';` : null}
    font-size: 14px;
  }

  &:after {
    ${props => props.suffix ? `content:'${props.suffix}';` : null}
    font-size: 18px;
  }
`
