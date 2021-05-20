export interface MultipleXAxesDataType {
    category: string[]
    series: {
        yCategory: string,
        data: number[]
    }[]
}
