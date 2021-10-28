import {ElementType} from "../../../../interface/enum";
import {
    BarChartIcon,
    BlockIcon,
    CardFlipperIcon,
    DotChartIcon,
    ImageIcon,
    LineChartIcon,
    PieChartIcon,
    TextIcon
} from "../../../../assets/icon";
import React from "react";

export const getElement = (type: ElementType) => {
    switch (type) {
        case ElementType.SINGLE_IMAGE:
            return <ImageIcon/>
        case ElementType.COLOR_BLOCK:
            return <BlockIcon/>
        case ElementType.GENERAL_TITLE:
            return <TextIcon/>
        case ElementType.DIGITAL_CARD_FLIPPER:
            return <CardFlipperIcon/>
        case ElementType.MULTIPLE_X_AXES:
            return <LineChartIcon/>
        case ElementType.BAR_WITH_BACKGROUND:
            return <BarChartIcon/>
        case ElementType.DOUGHNUT_CHART_WITH_ROUNDED_CORNER:
            return <PieChartIcon/>
        case ElementType.BUBBLE_CHART:
            return <DotChartIcon/>
    }
}
