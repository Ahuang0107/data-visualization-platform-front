import React from "react";
import styled from "styled-components";

export default function Card(props: {}): JSX.Element {

    return (
        <CardWrap>
            card
        </CardWrap>
    )
}
const CardWrap = styled.div`
  width: 300px;
  height: 250px;
  background: #FFF;
  margin: 20px;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: none;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
  }
`
