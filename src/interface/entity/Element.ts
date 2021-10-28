import {ElementType} from "../enum";
import {BarWithBackgroundDataType} from "./BarWithBackgroundDataType";
import {DoughnutChartDataType} from "./DoughnutChartDataType";
import {MultipleXAxesDataType} from "./MultipleXAxesDataType";

/**
 * 组件元素的属性
 */
export interface Element {
    /**
     * 组件元素主键，唯一标识
     */
    primaryKey: string
    /**
     * 组件类型
     */
    type: ElementType
    /**
     * 组件名称，显示在图层面板
     */
    name: string

    /**
     * 组件宽高位置
     */
    width: number
    height: number
    x: number
    y: number

    /**
     * 如果组件type是FOLDER，则拥有子元素
     */
    subItem?: Element[]

    /**
     * 通用标题组件的属性
     */
    generalTitle?: GeneralTitleDataType

    /**
     * 数字翻牌器组件的属性
     */
    digitalCardFlipper?: DigitalCardFlipperDateType

    /**
     * 折线柱图的数据结构
     */
    barWithBackground?: BarWithBackgroundDataType

    /**
     * 折线图的数据结构
     */
    multipleXAxes?: MultipleXAxesDataType

    /**
     * 饼图的数据结构
     */
    doughnutChart?: DoughnutChartDataType
}

interface GeneralTitleDataType {
    /**
     * 标题内容
     */
    content: string
    /**
     * 字体
     */
    fontFamily: string
    /**
     * 字号
     */
    fontSize: number
}

interface DigitalCardFlipperDateType {
    /**
     * 翻牌器内容
     */
    content: string
    /**
     * 翻牌器数字大小
     */
    size: number
    /**
     * 标题
     */
    title: {
        /**
         * 标题内容
         */
        content: string
        /**
         * 标题字号
         */
        constSize: number
        /**
         * 标题位置是否为顶部（否则为底部）
         */
        isTop: boolean
    }
    /**
     * 前缀
     */
    prefix: {
        content: string
    }
    /**
     * 后缀
     */
    suffix: {
        content: string
    }
}
