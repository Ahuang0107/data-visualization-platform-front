import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import {Element, Property} from "../../../interface/entity";
import ConfigContentComp from "./ConfigContent/ConfigContentComp";
import ConfigContentCanvas from "./ConfigContent/ConfigContentCanvas";

export default function ConfigPanel(props: {
    show?: boolean
    focusElement: Element | null
    setFocusElement: React.Dispatch<React.SetStateAction<Element | null>>
    property: Property
    setProperty: React.Dispatch<React.SetStateAction<Property>>
    updateElementNode: (data: Element) => void
    setDrawerShow: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
    const {focusElement, setFocusElement, property, setProperty, updateElementNode, setDrawerShow} = props
    return (
        <ConfigPanelWrap show={props.show}>
            <ConfigManagerWrap>
                <ConfigManager>
                    {
                        focusElement?.hasOwnProperty('primaryKey') ?
                            <ConfigContentComp focusElement={focusElement}
                                               updateElementNode={updateElementNode}
                                               setFocusElement={setFocusElement}
                                               setDrawerShow={setDrawerShow}/> :
                            <ConfigContentCanvas property={property} setProperty={setProperty}/>
                    }
                </ConfigManager>
            </ConfigManagerWrap>
        </ConfigPanelWrap>
    )
}

const ConfigPanelWrap = styled.div<{
    show?: boolean
}>`
  width: ${(props) => props.show ? "332px" : "0"};
  height: 100%;
  z-index: 90;
  background: #1c1f25;
  position: relative;
  transition: width .25s ease-in-out;
  overflow: hidden;
  box-shadow: -1px 0 #000;
`;
const ConfigManagerWrap = styled.div`
  width: 332px;
  height: 100%;
  background: var(--datav-gui-bg);
  transition: .25s ease-in-out;
  user-select: none;
`
const ConfigManager = styled.div`
  height: 100%;
  background: var(--datav-gui-bg);
  user-select: none;
`
