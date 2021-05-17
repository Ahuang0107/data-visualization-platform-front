import React, {useEffect, useState} from "react";
import * as echarts from 'echarts/core';
import {LegendComponent, TooltipComponent} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {Element} from "../../../../../../../interface/entity";

echarts.use(
    [TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
);

export default function DoughnutChartWithRoundedCorner(props: {
    element: Element
}): JSX.Element {
    const elementId = props.element.primaryKey.toString()
    const [main, setMain] = useState(document.getElementById(elementId))
    const option = {
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            textStyle: {
                color: '#fff'
            },
            top: '5%',
            left: 'center'
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '搜索引擎'},
                    {value: 735, name: '直接访问'},
                    {value: 580, name: '邮件营销'},
                    {value: 484, name: '联盟广告'},
                    {value: 300, name: '视频广告'}
                ]
            }
        ]
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
