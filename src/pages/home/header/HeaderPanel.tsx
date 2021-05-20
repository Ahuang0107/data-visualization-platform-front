import React, {useState} from "react";
import styled from "styled-components";

export default function HeaderPanel(props: {}): JSX.Element {
    const [title, setTitle] = useState(true)
    return (
        <WrapperHeader>
            <NavTitle>{title ? '我的大屏项目' : '我的数据源'}</NavTitle>
            <TabGroupWrapper>
                <TabWrapper isActive={title} onClick={() => {
                    setTitle(true)
                }}>
                    <TabText>数据大屏</TabText>
                </TabWrapper>
                <TabWrapper isActive={!title} onClick={() => {
                    setTitle(false)
                }}>
                    <TabText>数据源</TabText>
                </TabWrapper>
            </TabGroupWrapper>
            <UserInfoWrapper></UserInfoWrapper>
        </WrapperHeader>
    )
}
const WrapperHeader = styled.div`
  position: relative;
  height: 62px;
  padding: 0 18px;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  color: #a1aeb3;
  background: #1d1e1f;
  border-bottom: 1px solid #000;
`
const NavTitle = styled.h1`
  width: 200px;
`
const TabGroupWrapper = styled.div`
  height: 100%;
  display: flex;
`
const TabWrapper = styled.div<{
    isActive: boolean
}>`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.isActive ? 'var(--datav-main-click-color)' : 'var(--datav-panel-item-bg)'};

  &:hover {
    background: ${props => props.isActive ? 'var(--datav-main-click-color)' : 'var(--datav-item-hover-color)'};
  }
`
const TabText = styled.h1`
  width: 100%;
  color: var(--datav-font-color);
  font-size: 18px;
  text-align: center;
`
const UserInfoWrapper = styled.div`
  width: 150px;
  height: 100%;
  background-color: #26A5FF;
`
