import React from "react";
import styled from "styled-components";

export default function StripButton(props: {
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
  width: 120px;
  padding: 0 4px;
  height: 26px;
  line-height: 24px;
  font-size: 12px;
  background: 0 0;
  border: 1px solid var(--datav-main-color);
  color: var(--datav-main-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  user-select: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  outline: 0;
  text-align: center;
  font-weight: 700;
  transition: .3s ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: var(--datav-main-hover-color);
    border-color: var(--datav-main-hover-color);
    background-clip: border-box;
  }
`
