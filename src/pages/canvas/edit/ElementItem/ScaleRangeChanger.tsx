import React, {useEffect, useState} from "react";
import styled from "styled-components";

export default function ScaleRangeChanger(props: {
    value: number
    onChange: React.Dispatch<React.SetStateAction<number>>
}): JSX.Element {
    const {onChange} = props
    const [value, setValue] = useState(props.value * 100)
    useEffect(() => {
        onChange(value / 100)
    }, [value])

    return (
        <ScaleRangerWrap>
            <RangeInput type={"range"} min={1} max={100} value={value} step={1}
                        onChange={(event) => {
                            setValue(parseInt(event.target.value))
                        }}/>
        </ScaleRangerWrap>
    )
}
const ScaleRangerWrap = styled.div`
  position: relative;
  padding: 4px 0;
  cursor: pointer;
  display: flex;
  right: 4px;
  align-items: center;
`

const RangeInput = styled.input`
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /*清除系统默认样式*/
    height: 8px; /*拖动块高度*/
    width: 8px; /*拖动块宽度*/
    background: #eee; /*拖动块背景*/
    border-radius: 50%; /*外观设置为圆形*/
  }

  height: 2px;
  background: linear-gradient(to right,
  rgb(0, 251, 255),
  rgb(0, 176, 255) 2.86243%,
  rgb(38, 42, 53) 31.8048%,
  rgb(38, 42, 53));
  cursor: pointer;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  display: inline-block;
`
