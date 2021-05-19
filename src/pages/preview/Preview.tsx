import React, {useEffect, useState} from "react";
import {Element, Property} from "../../interface/entity";
import PreviewCanvas from "./PreviewCanvas";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Preview(): JSX.Element {
    let {id} = useParams<{ id: string }>()
    //管理画布本身的属性
    const [property, setProperty] = useState<Property>()
    //管理画布上的元素列表
    const [elementList, setElementList] = useState<Element[]>([])

    useEffect(() => {
        getElementListData()
    }, [])

    // 根据大屏ID获取大屏数据
    function getElementListData() {
        axios.get('http://localhost:9090/api/canvas/' + id)
            .then(function (response) {
                if (response.status == 200) {
                    if (response.data.code === 200) {
                        setProperty(response.data.data.property)
                        setElementList(response.data.data.elements)
                    } else {
                        alert("获取项目详情出错")
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return (
        <PreviewCanvas property={property} elements={elementList}/>
    )
}
