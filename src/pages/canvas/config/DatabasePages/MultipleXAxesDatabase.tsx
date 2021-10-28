import React, {Dispatch, SetStateAction} from "react";
import styled from "styled-components";
import StripButton from "./button/StripButton";
import {Element} from "../../../../interface/entity";

export default function MultipleXAxesDatabase(props: {
    element: Element | any
    updateElementNode: (data: Element) => void
    setDrawerShow: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
    const {setDrawerShow} = props
    return (
        <>
            <DataSource>
                <DataResultTitle>数据相应结果</DataResultTitle>
                <DataFlowWrap>
                    <DSLine>
                        <DSTitle>
                            <DSTypeText>静态数据</DSTypeText>
                        </DSTitle>
                        <StripButton onClick={() => setDrawerShow(true)}>
                            <span>配置数据源</span>
                        </StripButton>
                    </DSLine>
                    <DSLineMT5>
                        <FilterCheckbox>
                            <CheckboxInputWrap>
                                <CheckboxInput/>
                            </CheckboxInputWrap>
                            <CheckboxLabel>数据过滤器</CheckboxLabel>
                        </FilterCheckbox>
                        <StripButton onClick={() => console.log("添加过滤器")}>
                            <span>添加过滤器</span>
                        </StripButton>
                    </DSLineMT5>
                    <DSLineMT5>
                        <span>
                            数据响应结果(只读)
                        </span>
                    </DSLineMT5>
                    <DSDots>
                        <DSDotA/>
                        <DSDot/>
                        <DSDotA/>
                    </DSDots>
                </DataFlowWrap>
                <DataResponse>
                    <ResponseEditor>

                    </ResponseEditor>
                </DataResponse>
            </DataSource>
        </>
    )
}
const DataSource = styled.div`
  color: #bcc9d4;
  user-select: none;
  background: var(--datav-gui-background-color-front);
`
const DataResultTitle = styled.div`
  padding: 10px;
  border-top: 1px solid var(--datav-panel-border-color);
  border-bottom: 1px solid var(--datav-panel-border-color);
`
const DataFlowWrap = styled.div`
  position: relative;
  padding: 10px;
`
const DSLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0 5px 20px;
`
const DSLineMT5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0 5px 20px;
  margin-top: 5px;
`
const DSTitle = styled.div`
`
const DSTypeText = styled.span`
  display: inline-block;
  padding: 6px;
  border-radius: 1px;
  line-height: 12px;
  font-size: 12px;
  background: #39414d;
  color: #bcc9d4;
  text-align: center;
  box-shadow: 0 0 5px -3px #000;
`
const FilterCheckbox = styled.label`
  margin-right: 10px;
  cursor: pointer;
  font-size: 0;
  display: inline-flex;
  align-items: center;
`
const CheckboxInputWrap = styled.span`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  height: 14px;
  width: 14px;
  border: var(--datav-cb-border);
  outline: var(--datav-common-outline);
  background: var(--datav-cb-bg);
  transition: .2s;
  cursor: pointer;
`
const CheckboxInput = styled.input`
  visibility: hidden;
`
const CheckboxLabel = styled.span`
  font-size: 12px;
  vertical-align: middle;
  margin-left: 6px;
  color: var(--datav-font-color);
  user-select: none;
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const DSDots = styled.div`
  position: absolute;
  left: 15px;
  top: 25px;
  width: 1px;
  height: 87px;
  background: #4c5768;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const DSDot = styled.div`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background: #7d8081;
  box-shadow: 0 0 3px #000;
  transition: background .2s;
`
const DSDotA = styled(DSDot)`
  background: var(--datav-main-color);
`
const DataResponse = styled.div`
  padding: 0 10px 10px 10px;
`
const ResponseEditor = styled.div`
  height: 240px;
  border: 1px solid var(--datav-panel-border-color);
  user-select: none;
  position: relative;
  overflow: hidden;
`
