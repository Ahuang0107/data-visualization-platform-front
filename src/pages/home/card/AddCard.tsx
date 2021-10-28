import React from "react";
import styled from "styled-components";
import {AddIcon} from "../../../assets/icon";
import {CardCommonWrap} from "./Common";

export default function AddCard(props: {
    onClick: () => void
}): JSX.Element {
    const {onClick} = props

    return (
        <CardWrap onClick={onClick}>
            <AddIcon/>
        </CardWrap>
    )
}
const CardWrap = styled(CardCommonWrap)`
  display: flex;
  align-items: center;
  justify-content: center;
`
