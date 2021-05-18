import React from "react";
import styled from "styled-components";

export default function CardContainer(props: {
    children?: React.ReactNode
}): JSX.Element {

    return (
        <ContainerWrap>
            {props.children}
        </ContainerWrap>
    )
}
const ContainerWrap = styled.div`
  width: 100%;
  padding: 10px 20px;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start
`
