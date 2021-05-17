import React from "react";
import styled from "styled-components";

export default function SquareButton(props: {
    children?: React.ReactNode
}): JSX.Element {

    return (
        <RealButton>
            {props.children}
        </RealButton>
    )
}
const RealButton = styled.div`
  width: 20px;
  height: 20px;
  background: #282f3a;

  display: flex;
  justify-content: center;
  align-items: center;
`;
