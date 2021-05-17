import styled from "styled-components";
import {
    AiFillFolder,
    AiFillFolderOpen,
    AiOutlineAreaChart,
    AiOutlineBarChart,
    AiOutlineBlock,
    AiOutlineDotChart,
    AiOutlineFieldNumber,
    AiOutlineLineChart,
    AiOutlinePieChart,
    AiOutlineRadarChart
} from "react-icons/ai";
import {BiImage, BiText, FiChevronRight, GoGlobe} from "react-icons/all";

/**
 * 图层元素类型缩略图icon样式
 */
const layerItemIconStyle = "width: 16px;" +
    "height: 16px;" +
    "margin-left: 5px;" +
    "color: aliceblue;"
//展开按钮icon
export const FoldIcon = styled(FiChevronRight)<{
    fold: boolean
}>`
  transform: ${(props) => props.fold ? 'rotate(0.25turn)' : ''};
  transition: .3s ease;
  ${layerItemIconStyle}
`
//文件夹icon
export const FolderIcon = styled(AiFillFolder)`
  ${layerItemIconStyle}
`
//展开的文件夹icon
export const FolderOpenIcon = styled(AiFillFolderOpen)`
  ${layerItemIconStyle}
`
//折线图元素icon
export const LineChartIcon = styled(AiOutlineLineChart)`
  ${layerItemIconStyle}
`
//气泡图元素icon
export const DotChartIcon = styled(AiOutlineDotChart)`
  ${layerItemIconStyle}
`
//柱状图元素icon
export const BarChartIcon = styled(AiOutlineBarChart)`
  ${layerItemIconStyle}
`
//面积图元素icon
export const AreaChartIcon = styled(AiOutlineAreaChart)`
  ${layerItemIconStyle}
`
//饼图元素icon
export const PieChartIcon = styled(AiOutlinePieChart)`
  ${layerItemIconStyle}
`
//雷达图元素icon
export const RadarChartIcon = styled(AiOutlineRadarChart)`
  ${layerItemIconStyle}
`
//文字元素icon
export const TextIcon = styled(BiText)`
  ${layerItemIconStyle}
`
//单张图片元素icon
export const ImageIcon = styled(BiImage)`
  ${layerItemIconStyle}
`
//自定义背景块元素icon
export const BlockIcon = styled(AiOutlineBlock)`
  ${layerItemIconStyle}
`
//数字翻牌器元素icon
export const CardFlipperIcon = styled(AiOutlineFieldNumber)`
  ${layerItemIconStyle}
`
//地图元素icon
export const MapIcon = styled(GoGlobe)`
  ${layerItemIconStyle}
`
