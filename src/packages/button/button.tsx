import React from "react";
import styled from "styled-components";

export const Button = (props: {
    name?: string,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => {

    return (
        <RealButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            const {onClick} = props
            if (onClick) {
                onClick(event)
            }
        }}>
            {props.children}
        </RealButton>
    )
}
const RealButton = styled.button`
  width: 120px;
  padding: 0 4px;
  height: 40px;
  line-height: 24px;
  font-size: 16px;
  font-family: 幼圆, serif;
  background: 0 0;
  color: var(--datav-font-color);
  background: var(--datav-main-color);
  border-radius: 20px;
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
    background: var(--datav-main-hover-color);
    background-clip: border-box;
  }
`
