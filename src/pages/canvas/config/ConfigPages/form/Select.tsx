import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {OptionData} from "../../../../../interface/entity";
import Options from "./Options";
import {ArrowDownIcon} from "../../../../../assets/icon";

export default function Select(props: {
    optionList: OptionData[]
    selectedValue: number | string | boolean
    updateSelectedValue: (value: number | string | boolean) => void
}): JSX.Element {
    const {updateSelectedValue} = props
    const [optionFold, setOptionFold] = useState(false)
    const [selected, setSelected] = useState(props.optionList[0])
    const selectEl = useRef(null)
    useEffect(() => {
        // 相当于 componentDidMount
        document.addEventListener('click', function (e) {
            if (selectEl.current == e.target) {
                setOptionFold(true)
            } else {
                setOptionFold(false)
            }
        })

        return () => {
            // 相当于 componentWillUnmount
            document.removeEventListener('click', function (e) {
                console.log("移除监听")
            })
        }
    }, [])
    useEffect(() => {
        updateSelectedValue(selected.value)
    }, [selected])
    return (
        <>
            <SelectSelection onClick={() => setOptionFold(true)}>
                <SelectSelectionContent>
                    <SelectSelectionSelectedValue>{selected.label}</SelectSelectionSelectedValue>
                    <SelectSearch>
                        <SelectSearchFieldWrap>
                            <SelectSearchField ref={selectEl}/>
                        </SelectSearchFieldWrap>
                    </SelectSearch>
                </SelectSelectionContent>
                <SelectArrow>
                    <ArrowDownIcon/>
                </SelectArrow>
            </SelectSelection>
            <Options optionFold={optionFold}
                     selected={selected}
                     data={props.optionList}
                     setSelected={setSelected}/>
        </>
    )
}
const SelectSelection = styled.div`
  height: var(--datav-gui-component-height) !important;
  line-height: var(--datav-gui-component-height) !important;
  border-radius: 0 !important;
  background: var(--datav-gui-component-background-color);
  border: 1px solid var(--datav-gui-component-border-color);
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  -webkit-user-select: none;
  display: block;

  &:hover {
    border: 1px solid var(--datav-gui-primary-color);
  }
`

const SelectSelectionContent = styled.div`
  margin-left: var(--datav-gui-input-padding);
  height: 100%;
  line-height: calc(var(--datav-gui-component-height) - 2px);
  position: relative;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
`

const SelectArrow = styled.span`
  user-select: none;
  top: 0;
  right: 2px;
  width: 14px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  outline: 0;
  color: inherit;
`

const SelectSelectionSelectedValue = styled.div`
  display: block;
  opacity: 1;
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  height: 100%;
  line-height: calc(var(--datav-gui-component-height) - 2px);
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
`
const SelectSearch = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: block;
`
const SelectSearchFieldWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
`
const SelectSearchField = styled.input`
  border: 0 !important;
  background: transparent;
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  outline: 0;
  width: 100%;
  box-shadow: none;
  box-sizing: border-box;
`
