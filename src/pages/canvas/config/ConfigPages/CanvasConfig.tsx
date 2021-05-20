import React, {useEffect, useState} from "react";
import {Property} from "../../../../interface/entity";
import DoubleInputPropertyWithAddMinus from "./form/DoubleInputPropertyWithAddMinus";
import {ColorOption} from "../../../../interface/data";
import SelectProperty from "./form/SelectProperty";

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
