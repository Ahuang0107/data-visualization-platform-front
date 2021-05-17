import React from "react";
import styled from "styled-components";
import {ElementType} from "../../../../interface/enum";

export default function ComponentItem(props: {
    name: string
    type: ElementType
    img: string
    onClick?: React.MouseEventHandler<HTMLLIElement>
}): JSX.Element {
    const {onClick} = props
    return (
        <ComponentItemWrap onClick={onClick}>
            <ComponentItemTitlePanel>
                <ComponentItemTitle>
                    {props.name}
                </ComponentItemTitle>
            </ComponentItemTitlePanel>
            <ComponentImagePanel>
                <ComponentImage src={props.img}/>
            </ComponentImagePanel>
        </ComponentItemWrap>
    )
}
const ComponentItemWrap = styled.li`
  cursor: pointer;
  display: inline-block;
  user-select: none;
  width: 220px;
  height: 140px;
  background-color: #181a1c;
  border-radius: 5px;
  margin-top: 5px;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: #2e343c;
  }
`
const ComponentItemTitlePanel = styled.div`
  height: 22px;
  width: 100%;
  background-color: #212326;
  border-radius: 5px 5px 0 0;

  display: flex;
  align-items: center;
  padding: 0 5px;
`
const ComponentImagePanel = styled.div`
  height: 118px;
  width: 100%;
`
const ComponentImage = styled.img`
  display: inline-block;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`
const ComponentItemTitle = styled.p`
  flex: none;
  font-size: 12px;
  color: #bcc9d4;
`
