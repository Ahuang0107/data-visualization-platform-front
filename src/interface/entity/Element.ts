import {ElementType} from "../enum";

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

interface BarWithBackgroundDateType {
    /**
     * 文字颜色
     */
    textColor: string
    /**
     * x轴显示列名
     */
    xAxis: {
        data: []
    }
    /**
     * y轴显示的数据
     */
    series: SeriesDataType[]
}

interface SeriesDataType {
    /**
     * y轴的数值数组
     */
    data: []
    /**
     * 数值显示的方式，有bar，line等
     */
    type: string
    /**
     * 如果是bar规定其最大宽度
     */
    barMaxWidth: number
    /**
     * bar的背景颜色
     */
    backgroundColor: string
}
