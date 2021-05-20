import {RequestMethod} from "../enum";

export const ColorOption = [
    {
        value: "#171a1fff",
        label: "默认背景色"
    },
    {
        value: "#ffffffff",
        label: "白色"
    },
]
export const FontFamilyOption = [
    {
        value: "微软雅黑",
        label: "微软雅黑",
    },
    {
        value: "宋体",
        label: "宋体",
    },
    {
        value: "幼圆",
        label: "幼圆",
    },
]
export const YesOrNoOption = [
    {
        value: true,
        label: "是",
    },
    {
        value: false,
        label: "否",
    },
]
export const DatasourceTypeOption = [
    {
        value: 1,
        label: "API",
    },
]
export const RequestTypeOption = [
    {
        value: RequestMethod.GET,
        label: "GET",
    },
    {
        value: RequestMethod.POST,
        label: "POST",
    },
]
