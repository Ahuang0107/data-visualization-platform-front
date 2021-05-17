import React from "react";
import styled from "styled-components";
import {OptionData} from "../../../../../interface/entity";
import Select from "./Select";

export default function SelectProperty(props: {
    title: string
    option: OptionData[]
    value: number | string | boolean
    changeValue: (value?: number | string | boolean) => void
}): JSX.Element {
    const {changeValue} = props
    return (
        <FieldWrap>
            <ShowPlaceholder/>
            <FieldTitle title={props.title}>{props.title}</FieldTitle>
            <FieldContainer>
                <DataSelectWrap>
                    <DataSelect>
                        <Select optionList={props.option}
                                selectedValue={props.value}
                                updateSelectedValue={changeValue}/>
                    </DataSelect>
                </DataSelectWrap>
            </FieldContainer>
        </FieldWrap>
    )
}
const FieldWrap = styled.div`
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  padding-left: var(--datav-gui-field-padding-left-level-1);
  background: var(--datav-gui-background-color-front);
  padding-top: 16px;
  width: 100%;
  display: flex;
  position: relative;
  padding-right: var(--datav-gui-field-padding-right);
  padding-bottom: var(--datav-gui-field-padding-bottom);
  transition: all var(--datav-gui-transition-time) var(--datav-gui-transition-easing);
  box-sizing: border-box;
`
const ShowPlaceholder = styled.i`
  display: block;
  width: 16px;
  height: var(--datav-gui-component-height);
  margin-right: 4px;
  position: relative;
  box-sizing: border-box;
`
const FieldTitle = styled.div`
  flex: 1;
  height: var(--datav-gui-component-height);
  line-height: var(--datav-gui-component-height);
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  display: block;
`
const FieldContainer = styled.div`
  width: 200px !important;
  margin-left: -4px;
  margin-right: -4px;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
`
const DataSelectWrap = styled.div`
  width: 100%;
  height: var(--datav-gui-component-height);
  line-height: var(--datav-gui-component-height);
  box-sizing: border-box;
`
const DataSelect = styled.div`
  height: 26px;
  width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  vertical-align: top;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  color: #666;
  line-height: 28px;
`
