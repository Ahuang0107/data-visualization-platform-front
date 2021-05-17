import styled from "styled-components";
import {
    AiOutlineAreaChart,
    AiOutlineBarChart,
    AiOutlineDotChart,
    AiOutlineLineChart,
    AiOutlinePieChart,
    AiOutlineRadarChart
} from "react-icons/ai";

/**
 * 图层元素类型缩略图icon样式
 */
const layerItemIconStyle = "width: 16px;" +
    "height: 16px;" +
    "margin-left: 5px;" +
    "color: aliceblue;"
//折线图
export const LineChartIcon = styled(AiOutlineLineChart)`
  ${layerItemIconStyle}
`
//气泡图
export const DotChartIcon = styled(AiOutlineDotChart)`
  ${layerItemIconStyle}
`
//柱状图
export const BarChartIcon = styled(AiOutlineBarChart)`
  ${layerItemIconStyle}
`
//面积图
export const AreaChartIcon = styled(AiOutlineAreaChart)`
  ${layerItemIconStyle}
`
//饼图
export const PieChartIcon = styled(AiOutlinePieChart)`
  ${layerItemIconStyle}
`
//雷达图
export const RadarChartIcon = styled(AiOutlineRadarChart)`
  ${layerItemIconStyle}
`
