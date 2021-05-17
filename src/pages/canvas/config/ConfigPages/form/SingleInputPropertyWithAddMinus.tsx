import React from "react";
import styled from "styled-components";

export default function SingleInputPropertyWithAddMinus(props: {
    title: string,
    value: number,
    changeValue: (value?: number) => void
}): JSX.Element {
    const {changeValue} = props
    const step = 2

    return (
        <FieldWrap>
            <ShowPlaceholder/>
            <FieldTitle title={props.title}>{props.title}</FieldTitle>
            <FieldContainer>
                <DataInputWrap>
                    <DataInputNumber>
                        <DataInputContent>
                            <DataInput min={0} max={12000} step={1} spellCheck={false}
                                       value={props.value}
                                       onChange={(e) =>
                                           changeValue(parseInt(e.target.value))
                                       }/>
                        </DataInputContent>
                        <SpanButtonGroup>
                            <AddSpanButton onClick={() =>
                                changeValue(props.value + step)
                            }>+</AddSpanButton>
                            <MinusSpanButton onClick={() =>
                                changeValue(props.value - step)
                            }>-</MinusSpanButton>
                        </SpanButtonGroup>
                    </DataInputNumber>
                </DataInputWrap>
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
const DataInputWrap = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  line-height: var(--datav-gui-component-height);
  width: 200px !important;
  box-sizing: border-box;
`
const DataInputNumber = styled.div`
  background: var(--datav-gui-component-background-color);
  height: var(--datav-gui-component-height);
  border: none;
  display: flex;
  box-sizing: border-box;
`
const DataInputContent = styled.div`
  background: var(--datav-gui-component-background-color);
  border: 1px solid var(--datav-gui-component-border-color);
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  outline: none;
  box-shadow: none;
  border-right-color: transparent;
  line-height: 16px;
  width: 100%;
  caret-color: var(--datav-main-color);
  box-sizing: border-box;
  margin: 0;
  border-radius: 0;
  transition: border .2s ease-in-out, box-shadow .2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  flex: 1;

  &:hover {
    border: 1px solid var(--datav-gui-primary-color);
  }
`
const DataInput = styled.input`
  color: var(--datav-gui-font-color-1) !important;
  text-align: start;
  font-size: 12px;
  flex: 1;
  background: 0 0;
  display: block;
  line-height: 16px;
  resize: none;
  padding: 0 7px;
  border: none;
  width: 30px;
`
const AddSpanButton = styled.span`
  line-height: calc(var(--datav-gui-component-height) / 2 - 5px) !important;
  height: calc(var(--datav-gui-component-height) / 2 - 1px) !important;
  background: var(--datav-gui-component-background-color);
  border: 1px solid var(--datav-gui-component-border-color);
  outline: none;
  box-shadow: none;
  border-color: transparent;
  font-size: var(--datav-gui-font-size-base) !important;
  color: var(--datav-gui-font-color-base) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: border .2s ease-in-out, color .2s ease-in-out;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--datav-gui-primary-color);
  }
`
const MinusSpanButton = styled.span`
  border-top: var(--datav-gui-component-border);
  line-height: calc(var(--datav-gui-component-height) / 2 - 5px) !important;
  height: calc(var(--datav-gui-component-height) / 2 - 1px) !important;
  background: var(--datav-gui-component-background-color);
  border: 1px solid var(--datav-gui-component-border-color);
  outline: none;
  box-shadow: none;
  border-color: transparent;
  font-size: var(--datav-gui-font-size-base) !important;
  color: var(--datav-gui-font-color-base) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: border .2s ease-in-out, color .2s ease-in-out;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--datav-gui-primary-color);
  }
`
const SpanButtonGroup = styled.div`
  border: var(--datav-gui-component-border);
  background: var(--datav-gui-component-background-color);
  width: 20px;
  box-sizing: border-box;
`
