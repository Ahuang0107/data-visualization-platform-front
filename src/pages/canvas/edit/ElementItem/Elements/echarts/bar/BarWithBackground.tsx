import React, {useEffect, useState} from "react";
import * as echarts from 'echarts/core';
import {GridComponent} from 'echarts/components';
import {BarChart} from 'echarts/charts';
import {CanvasRenderer} from 'echarts/renderers';
import {Element} from "../../../../../../../interface/entity";

echarts.use(
    [GridComponent, BarChart, CanvasRenderer]
);

export default function BarWithBackground(props: {
    element: Element
}): JSX.Element {
    const elementId = props.element.primaryKey
    const [main, setMain] = useState(document.getElementById(props.element.primaryKey))
    const xAxis = props.element.barWithBackground?.category ?? {
        data: ['一季度', '二季度', '三季度', '四季度'],
    }
    const yAxis = props.element.barWithBackground?.series ?? [
        {
            data: [400, 200, 10, 180],
            type: 'bar',
        },
        {
            data: [170, 90, 120, 110],
            type: 'bar',
        },
        {
            data: [400, 200, 120, 180],
            type: 'line',
        },
    ]
    const yAxisData = yAxis.map((item: any) => {
        if (item.type === "bar") {
            return {
                data: item.data,
                type: "bar",
                showBackground: true,
                barMaxWidth: 20,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        } else {
            return {
                data: item.data,
                type: "line",
            }
        }
    })
    const option = {
        textStyle: {
            color: '#fff'
        },
        xAxis: {
            type: 'category',
            data: xAxis.data
        },
        yAxis: {
            type: 'value'
        },
        series: yAxisData
    }
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
