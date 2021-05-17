import styled from "styled-components";
import {FiChevronDown, FiChevronsDown, FiChevronsUp, FiChevronUp} from "react-icons/all";

const layerMoveIconStyle = "width: 16px;" +
    "height: 16px;" +
    "color: aliceblue;" +
    "&:hover {\n    color: black;\n  }"

export const LayerUpIcon = styled(FiChevronUp)`
  ${layerMoveIconStyle}
`
export const LayerDownIcon = styled(FiChevronDown)`
  ${layerMoveIconStyle}
`
export const LayerUpTopIcon = styled(FiChevronsUp)`
  ${layerMoveIconStyle}
`
export const LayerDownBottomIcon = styled(FiChevronsDown)`
  ${layerMoveIconStyle}
`
