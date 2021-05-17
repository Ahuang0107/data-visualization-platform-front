import styled from "styled-components";

export const LayerManagerItemWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  color: #bcc9d4;
  background: var(--datav-panel-item-bg);
  transition: .1s ease-in-out;
  cursor: pointer;
  flex: none;
  overflow: hidden;

  &:hover {
    color: #fff;
    background: var(--datav-item-hover-color);
  }
`

export const LayerItemSpan = styled.span`
  flex: auto;
  text-indent: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const LayerManagerThumbnail = styled.div`
  flex: auto;
  margin-left: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
