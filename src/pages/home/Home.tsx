import React, {useEffect, useState} from "react";
import styled from "styled-components";
import HeaderPanel from "./header/HeaderPanel";
import CardContainer from "./card/CardContainer";
import Card from "./card/Card";
import axios from "axios";
import {CanvasInfo} from "../../interface/entity/CanvasInfo";
import {History, LocationState} from "history";
import AddCard from "./card/AddCard";

export default function Home(props: {
    history: History<LocationState>
}): JSX.Element {
    const [canvasInfoList, setCanvasInfoList] = useState<CanvasInfo[]>([])
    useEffect(() => {
        getCanvasList()
        document.title = localStorage.getItem("userName") as string
    }, [])

    function getCanvasList() {
        axios.get('http://localhost:9090/api/canvas/list', {
            params: {
                userId: localStorage.getItem("userId")
            }
        })
            .then(function (response) {
                if (response.status === 200) {
                    if (response.data.code === 200) {
                        setCanvasInfoList(response.data.data)
                    } else {
                        alert("获取项目列表出错")
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function createCanvas() {
        axios.post('http://localhost:9090/api/canvas/', {
            userId: localStorage.getItem("userId"),
            property: {
                name: "empty canvas project",
                width: 2560,
                height: 1080,
                backgroundColor: "#171a1fff",
            }
        }).then(function (response) {
            if (response.status === 200) {
                if (response.data.code === 200) {
                    alert("创建项目成功")
                    getCanvasList()
                } else {
                    alert("创建项目失败")
                }
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    return (
        <HomeWrap>
            <HeaderPanel/>
            <MainWrap>
                <CardContainer>
                    {canvasInfoList.map((item, index) =>
                        <Card key={index} content={item} history={props.history}/>
                    )}
                    <AddCard onClick={createCanvas}/>
                </CardContainer>
            </MainWrap>
        </HomeWrap>
    )
}
const HomeWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`
const MainWrap = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  background: var(--datav-panel-color);
`
