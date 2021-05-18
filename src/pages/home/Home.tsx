import React from "react";
import styled from "styled-components";
import HeaderPanel from "./header/HeaderPanel";
import CardContainer from "./card/CardContainer";
import Card from "./card/Card";

export default function Home(props: {}): JSX.Element {

    return (
        <HomeWrap>
            <HeaderPanel/>
            <MainWrap>
                <CardContainer>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </CardContainer>
            </MainWrap>
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`
const MainWrap = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  background: var(--datav-panel-color);
`
