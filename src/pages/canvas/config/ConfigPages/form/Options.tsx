import React from "react";
import styled from "styled-components";
import {OptionData} from "../../../../../interface/entity";

export default function Options(props: {
    optionFold: boolean
    selected: OptionData | undefined
    data: OptionData[]
    setSelected: React.Dispatch<React.SetStateAction<OptionData>>
}): JSX.Element {
    const {setSelected} = props
    return (
        <SelectOption show={props.optionFold}>
            <SelectOptionDropdownMenu>
                {props.data.map((item) =>
                    props.selected?.value == item.value ?
                        <SelectOptionDropdownItemSelected key={item.value.toString()}
                                                          onClick={() => setSelected(item)}>
                            {item.label}
                        </SelectOptionDropdownItemSelected> :
                        <SelectOptionDropdownItem key={item.value.toString()}
                                                  onClick={() => setSelected(item)}>
                            {item.label}
                        </SelectOptionDropdownItem>
                )}
            </SelectOptionDropdownMenu>
        </SelectOption>
    )
}
const SelectOption = styled.div<{
    show: boolean
}>`
  visibility: ${props => props.show ? "visible" : "hidden"};
  position: absolute;
  margin-top: 5px;
  width: 100%;
  z-index: 10001;
  box-shadow: none;
  background: var(--datav-gui-background-color-back);
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid var(--datav-gui-primary-color);
  border-radius: 0 !important;
`
const SelectOptionDropdownMenu = styled.ul`
  max-height: 208px;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 9999;
`
const SelectOptionDropdownItem = styled.li`
  padding: 0 14px;
  height: var(--datav-gui-component-height);
  line-height: var(--datav-gui-component-height);
  background: var(--datav-gui-background-color-back);
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-base);
  cursor: pointer;
  margin: 0;
  position: relative;
  display: block;
  font-weight: 400;
  white-space: nowrap;
  box-sizing: border-box;

  &:hover {
    padding: 0 12px;
    background: var(--datav-gui-background-hover-color);
    border-left: 2px solid var(--datav-gui-primary-color);
    cursor: pointer;
  }
`
const SelectOptionDropdownItemSelected = styled.li`
  padding: 0 14px;
  height: var(--datav-gui-component-height);
  line-height: var(--datav-gui-component-height);
  font-size: var(--datav-gui-font-size-base);
  color: var(--datav-gui-font-color-1);
  background: var(--datav-gui-background-color-back);
  cursor: pointer;
  margin: 0;
  position: relative;
  display: block;
  font-weight: 400;
  white-space: nowrap;
  box-sizing: border-box;

  &:hover {
    padding: 0 12px;
    background: var(--datav-gui-background-hover-color);
    border-left: 2px solid var(--datav-gui-primary-color);
    cursor: pointer;
  }
`
