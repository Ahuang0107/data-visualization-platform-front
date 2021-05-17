import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {RequestMethod} from "../../interface/enum";
import StripButton from "../canvas/config/DatabasePages/button/StripButton";
import {DatasourceTypeOption, RequestTypeOption} from "../../interface/data";
import Select from "../canvas/config/ConfigPages/form/Select";
import JsonViewer from "./JsonViewer";

export default function Drawer(props: {
    setDrawerShow: Dispatch<SetStateAction<boolean>>
}): JSX.Element {
    const {setDrawerShow} = props
    const [dataSourceType, setDatasourceType] = useState(1)
    const [requestType, setRequestType] = useState(1)
    const [url, setUrl] = useState("")
    const [responseData, setResponseData] = useState({})
    const updateDatasourceType = function (value: number | string | boolean) {
        if (typeof value == "string") {
            setDatasourceType(parseInt(value))
        } else if (typeof value == "boolean") {
            setDatasourceType(value ? 1 : 0)
        } else {
            setDatasourceType(value)
        }
    }
    const updateRequestType = function (value: number | string | boolean) {
        if (typeof value == "string") {
            setRequestType(parseInt(value))
        } else if (typeof value == "boolean") {
            setRequestType(value ? 1 : 0)
        } else {
            setRequestType(value)
        }
    }
    const maskRef = useRef(null)
    useEffect(() => {
        // 相当于 componentDidMount
        document.addEventListener('click', function (e) {
            if (maskRef.current == e.target) {
                setDrawerShow(false)
            }
        })

        return () => {
            // 相当于 componentWillUnmount
            document.removeEventListener('click', function (e) {
                console.log("移除监听")
            })
        }
    }, [])

    function sendRequest(method: number, url: string) {
        switch (method) {
            case RequestMethod.GET:
                axios.get(url)
                    .then(function (response) {
                        if (response.status == 200) {
                            setResponseData(response.data)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
                break
            default:
                throw Error("非法请求方式")
        }
    }

    return (
        <DrawerWrap>
            <DrawerMask ref={maskRef}/>
            <DrawerMain>
                <DrawerTitle>
                    <DatasourcePanelTitle>设置数据源</DatasourcePanelTitle>
                </DrawerTitle>
                <DrawerBody>
                    <StepTitle>数据源</StepTitle>
                    <DatasourceSelector>
                        <label>数据源类型</label>
                        <DatasourceSelect>
                            <Select optionList={DatasourceTypeOption}
                                    selectedValue={dataSourceType}
                                    updateSelectedValue={updateDatasourceType}/>
                        </DatasourceSelect>
                    </DatasourceSelector>
                    <DSApi>
                        <p>请求方式</p>
                        <DatasourceSelect>
                            <Select optionList={RequestTypeOption}
                                    selectedValue={requestType}
                                    updateSelectedValue={updateRequestType}/>
                        </DatasourceSelect>
                    </DSApi>
                    <DSApi>
                        <p>url:</p>
                        <DatasourceSelect>
                            <DataInputNumber>
                                <DataInputContent>
                                    <DataInput spellCheck={false}
                                               value={url}
                                               onChange={(e) => {
                                                   setUrl(e.target.value)
                                               }}/>
                                </DataInputContent>
                            </DataInputNumber>
                        </DatasourceSelect>
                    </DSApi>
                    <DSApi>
                        <StripButton onClick={() => sendRequest(requestType, url)}>
                            <span>测试请求数据</span>
                        </StripButton>
                    </DSApi>
                    <JsonViewer code={responseData}/>
                </DrawerBody>
            </DrawerMain>
        </DrawerWrap>
    )
}
const DrawerWrap = styled.div`
  visibility: visible;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
const DrawerMask = styled.div`
  position: absolute;
  background: 0 0 !important;
  height: 100%;
  width: 100%;
  transition: opacity .3s;
  opacity: 1;
`
const DrawerMain = styled.div`
  width: 500px;
  position: absolute;
  right: 0;
  height: 100%;
  transition: transform .3s cubic-bezier(.78, .14, .15, .86), -webkit-transform .3s cubic-bezier(.78, .14, .15, .86);
  background: var(--datav-panel-color) !important;
  transform: none;
  padding: 16px 20px;
  color: #bcc9d4;
  user-select: none;
`
const DrawerTitle = styled.div`
  line-height: 16px;
  color: var(--datav-main-color);
  border-bottom: 1px solid rgba(255, 255, 255, .15);
  padding: 5px;
  display: flex;
  justify-content: space-between;
`
const DatasourcePanelTitle = styled.p`
  font-size: 18px;
  color: #eee;
  margin-bottom: 10px;
`
const DrawerBody = styled.div`
  margin: 0 -20px;
  height: 100%;
  padding: 0 20px 80px 20px;
  overflow-y: scroll;
`
const StepTitle = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 10px;

  &::before {
    display: block;
    content: '';
    position: absolute;
    left: -13px;
    top: 6px;
    height: 8px;
    width: 8px;
    box-shadow: 0 0 4px -2px #000;
    background: var(--datav-main-color);
    transition: background .2s;
    border-radius: 4px;
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 300px;
    background: rgba(128, 128, 128, .4);
    right: 0;
    top: 10px;
    transform: scaleY(.5);
  }
`
const DatasourceSelector = styled.div`
  margin-top: 15px;
`
const DatasourceSelect = styled.div`
  width: 460px;
  margin: 10px 0;
`
const DSApi = styled.div`
  margin: 10px 0;
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
