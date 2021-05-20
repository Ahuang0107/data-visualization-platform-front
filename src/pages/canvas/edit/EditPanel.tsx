import React from "react";
import styled from "styled-components";
import {Element, Property} from "../../../interface/entity";
import Canvas from "./ElementItem/Canvas";

export default function EditPanel(props: {
    property: Property
    elementList: Element[] | null
    focusElement: Element | undefined
    setFocusElement: React.Dispatch<React.SetStateAction<Element | undefined>>
    updateElementNode: (data: Element) => void
}): JSX.Element {
    const {focusElement, setFocusElement, updateElementNode} = props
    return (
        <EditPanelWrap>
            <EditorPanelWrap>
                <Canvas property={props.property}
                        elements={props.elementList}
                        focusElement={focusElement}
                        setFocusElement={setFocusElement}
                        updateElementNode={updateElementNode}/>
            </EditorPanelWrap>
            <EditSlider>
                {/*<ScaleRangeChanger/>*/}
            </EditSlider>
        </EditPanelWrap>
    )
}
const EditPanelWrap = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  height: 100%;
  z-index: 2;
  position: relative;
`;
const EditorPanelWrap = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

const EditSlider = styled.div`
  background: #222528;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px #000;
  user-select: none;
  z-index: 99;
`
