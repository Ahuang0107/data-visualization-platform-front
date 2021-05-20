import React from "react";
import styled from "styled-components";

export default function RectangleButton(props: {
    name?: string,
    children?: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}): JSX.Element {
    const {onClick} = props

    return (
        <RealButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            onClick(event)
        }}>
            {props.children}
        </RealButton>
    )
}
const RealButton = styled.button`
  width: 40px;
  height: 24px;
  background-color: var(--datav-btn-bg-default);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  box-shadow: inset 0 0 0 1px rgb(255 235 235 / 10%), 0 0 0 1px #181818;
  transition: .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--datav-btn-bg-hover);
  }

  &:active {
    background-color: var(--datav-main-color);
  }
`
