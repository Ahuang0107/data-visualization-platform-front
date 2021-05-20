import styled from "styled-components";
import {BiWindowOpen, CgBrowser, CgCloseO, FiSave, IoIosArrowBack, IoMdAddCircle} from "react-icons/all";

//保存icon
export const SaveIcon = styled(FiSave)`
  width: 16px;
  height: 16px;
  color: #e6e6e6;
`
//浏览icon
export const BrowserIcon = styled(CgBrowser)`
  width: 16px;
  height: 16px;
  color: #e6e6e6;
`
//发布icon
export const PublishIcon = styled(BiWindowOpen)`
  width: 16px;
  height: 16px;
  color: #e6e6e6;
`
//关闭icon
export const CloseIcon = styled(CgCloseO)`
  width: 20px;
  height: 20px;
  color: #e6e6e6;
`
//用户数据大屏项目管理页面的新建大屏项目icon
export const AddIcon = styled(IoMdAddCircle)`
  width: 64px;
  height: 64px;
  color: var(--datav-gray-color);
`
export const BackIcon = styled(IoIosArrowBack)`
  width: 16px;
  height: 16px;
  padding: 2px;

  &:hover {
    color: var(--datav-main-color);
  }
`
