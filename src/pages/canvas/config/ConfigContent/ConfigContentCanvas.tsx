import React from "react";
import styled from "styled-components";

export default function ConfigContentCanvas(props: {}): JSX.Element {

    return (
        <>
            <ConfigManagerHead>页面设置</ConfigManagerHead>
            <ConfigManagerBody>
                <PageConfig>
                </PageConfig>
            </ConfigManagerBody>
        </>
    )
}
const ConfigManagerHead = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: var(--datav-panel-title-bg);
  color: #bcc9d4;
  text-align: center;
  user-select: none;
  font-size: 12px;
`

const ConfigManagerBody = styled.div`
  width: 100%;
  height: 100%;
  margin-top: -36px;
  padding-top: 36px;
`

const PageConfig = styled.div`
  height: 100%;
  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: block;
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #434b55;
    border: 1px solid #434b55;
  }

  ::-webkit-scrollbar-track {
    background: var(--datav-scroll-track-bg);
  }
`
