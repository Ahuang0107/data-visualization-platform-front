/**
 * 把css样式的px值转化成不带px的number值
 * @param value
 */
export function removePx(value: string | null | undefined): number {
    if (value) {
        const hasPx = value.match(/[^0-9]+/)
        if (hasPx && hasPx.toString() === 'px') {
            const result = value.match(/[0-9]+/)
            if (result) {
                return parseInt(result.toString())
            }
        }
    }
    return 0
}
