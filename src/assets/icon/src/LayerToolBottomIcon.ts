import styled from "styled-components";
import {BiFolderPlus, BiHide, BiLockAlt, CgTrash} from "react-icons/all";

const layerToolBottomIconStyle = "width: 16px;" +
    "height: 16px;" +
    "margin-left: 5px;" +
    "color: aliceblue;" +
    "transition: background .2s;" +
    "border-radius: 1px;" +
    "&:hover{\n    background: #2681FF;\n  }"
export const ToFolderIcon = styled(BiFolderPlus)`
  ${layerToolBottomIconStyle}
`
export const TrashIcon = styled(CgTrash)`
  ${layerToolBottomIconStyle}
`
export const LockIcon = styled(BiLockAlt)`
  ${layerToolBottomIconStyle}
`
export const HideIcon = styled(BiHide)`
  ${layerToolBottomIconStyle}
`
