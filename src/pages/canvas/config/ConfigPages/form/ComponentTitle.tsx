import React from "react";
import styled from "styled-components";
import {BackIcon} from "../../../../../assets/icon";
import {Element} from "../../../../../interface/entity";

export default function ComponentTitle(props: {
    name: string
    setFocusElement: React.Dispatch<React.SetStateAction<Element | null>>
}): JSX.Element {
    const {setFocusElement} = props

    return (
        <ComponentTitleWrap>
            <BackIcon onClick={() => setFocusElement(null)}/>
            <Title>
                <TitleName>
                    <AliasName>
                        {props.name}
                    </AliasName>
                </TitleName>
                <VersionTag>
                    <VersionNumber>v1.0.0 | {props.name}</VersionNumber>
                </VersionTag>
            </Title>
        </ComponentTitleWrap>
    )
}
const ComponentTitleWrap = styled.div`
  position: relative;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 8px;
  padding-top: 12px;
  background: var(--datav-gui-background-color-front);
`
const Title = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 5px;
  overflow: hidden;
`
const TitleName = styled.div`
  font-size: 14px;
  padding-bottom: 3px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`
const AliasName = styled.span`
  font-size: 14px;
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  color: inherit;
`
const VersionTag = styled.div`
  font-size: 12px;
  color: #647279;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`
const VersionNumber = styled.span`
  color: inherit;
`
