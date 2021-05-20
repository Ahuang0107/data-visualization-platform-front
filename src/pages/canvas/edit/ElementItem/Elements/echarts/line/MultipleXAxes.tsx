import React, {useEffect, useState} from "react";
import * as echarts from 'echarts/core';
import {GridComponent, LegendComponent, TooltipComponent} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {Element} from "../../../../../../../interface/entity";

echarts.use(
    [TooltipComponent, GridComponent, LegendComponent, LineChart, CanvasRenderer]
);

export default function MultipleXAxes(props: {
    element: Element
}): JSX.Element {
    const elementId = props.element.primaryKey.toString()
    const [main, setMain] = useState(document.getElementById(elementId))
    const colors = ['#5470C6', '#EE6666']
    const xLabelList = props.element.multipleXAxes?.xLabelList ?? ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
    const data = props.element.multipleXAxes?.series ?? [
        {
            yCategory: "2015 降水量",
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            yCategory: "2016 降水量",
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        },
    ]
    const xAxis = data.map((item, index) => {
        return {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[index]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params: { value: string; seriesData: string | any[]; }) {
                        return item.yCategory + '  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: xLabelList
        }
    })
    const series = data.map((item, index) => {
        return {
            name: item.yCategory,
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            emphasis: {
                focus: 'series'
            },
            data: item.data
        }
    })
    const option = {
        color: colors,
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            },
        },
        grid: {
            top: 70,
            bottom: 50
        },
        xAxis: xAxis,
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: series
    };
    useEffect(() => {
        const node = document.getElementById(elementId)
        setMain(node)
    }, [])
    useEffect(() => {
        if (main && option) {
            const myChart = echarts.init(main)
            myChart.resize({width: props.element.width, height: props.element.height})
            myChart.setOption(option)
        }
    }, [main, props.element])
    return (
        <div id={elementId}/>
    )
}
