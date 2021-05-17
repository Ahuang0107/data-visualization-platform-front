import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {DataIcon, InterIcon, SettingsIcon} from "../../../../assets/icon";

export default function ConfigManagerTabs(props: {
    activeTab: number
    updateActiveTab: (value: number) => void
}): JSX.Element {
    const {updateActiveTab} = props
    const [activeTab, setActiveTab] = useState(props.activeTab)
    useEffect(() => {
        setActiveTab(props.activeTab)
    }, [props.activeTab])
    return (
        <ConfigManagerTabsNavWrap>
            <ConfigManagerTabsNav>
                <ConfigManagerTabsNavTab active={activeTab == 1}
                                         onClick={() => updateActiveTab(1)}>
                    <SettingsIcon/>
                </ConfigManagerTabsNavTab>
                <ConfigManagerTabsNavTab active={activeTab == 2}
                                         onClick={() => updateActiveTab(2)}>
                    <DataIcon/>
                </ConfigManagerTabsNavTab>
                <ConfigManagerTabsNavTab active={activeTab == 3}
                                         onClick={() => updateActiveTab(3)}>
                    <InterIcon/>
                </ConfigManagerTabsNavTab>
            </ConfigManagerTabsNav>
        </ConfigManagerTabsNavWrap>
    )
}
const ConfigManagerTabsNavWrap = styled.div`
  height: 30px;
  line-height: 30px;
  position: relative;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0;
  background: #13161a;
  background: var(--datav-nav-bg);
  transition: padding .2s;
`

const ConfigManagerTabsNav = styled.div`
  overflow-y: hidden;
  position: relative;
  height: 100%;
`

const ConfigManagerTabsNavTab = styled.div<{
    active: boolean
}>`
  min-width: 33.3333%;
  max-width: 33.3333%;
  flex: 1;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${props => props.active ? "var(--datav-nav-active-bg);" : "var(--datav-nav-bg);"}
  color: ${props => props.active ? "var(--datav-main-color);" : "#bcc9d4;"}
  border-top: ${props => props.active ? "2px solid var(--datav-main-color);" : "2px solid transparent;"}
  transition: .2s;
  outline: 0;
  font-size: 12px;
  cursor: pointer;
  padding: 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${props => props.active ? "var(--datav-nav-active-bg);" : "var(--datav-nav-hover-bg);"}
  }
`
