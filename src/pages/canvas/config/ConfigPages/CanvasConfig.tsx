import React, {useEffect, useState} from "react";
import {Property} from "../../../../interface/entity";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import {ColorOption} from "../../../../interface/data";
import SelectProperty from "./form/SelectProperty";
import SingleInputProperty from "./form/SingleInputProperty";

export default function CanvasConfig(props: {
    property: Property
    updateProperty: React.Dispatch<React.SetStateAction<Property>>
}): JSX.Element {
    const {updateProperty} = props
    const [property, setProperty] = useState(props.property)
    useEffect(() => {
        setProperty(props.property)
    }, [props.property])
    useEffect(() => {
        updateProperty(property)
    }, [property])

    return (
        <>
            <SingleInputProperty title={"项目名称"}
                                 content={property.name}
                                 changeContent={(name?: string) => {
                                     setProperty({
                                         ...property,
                                         name: name ?? property.name
                                     })
                                 }}/>
            <DoubleInputPropertyWithAddMinus title={"画布尺寸"}
                                             numbers={{
                                                 number1: property.width,
                                                 number2: property.height
                                             }}
                                             changeNumbers={(width?: number, height?: number) => {
                                                 setProperty({
                                                     ...property,
                                                     width: width ?? property.width,
                                                     height: height ?? property.height
                                                 })
                                             }}/>
            <SelectProperty title={"画布背景色"}
                            option={ColorOption}
                            value={property.backgroundColor}
                            changeValue={(value?: number | string | boolean) => {
                                setProperty({
                                    ...property,
                                    backgroundColor: value?.toString() ?? property.backgroundColor
                                })
                            }}/>

        </>
    )
}
