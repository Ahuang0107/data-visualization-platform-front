import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import {History, LocationState} from "history";
import {Button} from "../../packages/button";
import {LoginBackgroundImage} from "../../assets/image";

export default function Login(props: {
    history: History<LocationState>
}): JSX.Element {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })
    return (
        <Background bgImg={LoginBackgroundImage}>
            <Img src={LoginBackgroundImage}/>
            <Centered>
                <Col>
                    <Show>登录</Show>
                </Col>
                <Col>
                    <Input type="text"
                           placeholder={"请输入用户名"}
                           value={loginForm.username}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                               setLoginForm(loginForm => ({
                                       ...loginForm,
                                       username: e.target.value
                                   })
                               )
                           }}/>
                </Col>
                <Col>
                    <Input type="password"
                           placeholder={"请输入密码"}
                           value={loginForm.password}
                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                               setLoginForm(loginForm => ({
                                       ...loginForm,
                                       password: e.target.value
                                   })
                               )
                           }}/>
                </Col>
                <Col>
                    <Button onClick={() => {
                        axios.post('http://localhost:9090/api/user', loginForm)
                            .then(function (response) {
                                if (response.status === 200) {
                                    if (response.data) {
                                        props.history.push('Main')
                                    }
                                }
                            })
                            .catch(function (error) {
                                console.log(error)
                            })
                    }}>
                        登录
                    </Button>
                </Col>
            </Centered>
        </Background>
    )
}

const Background = styled.div<{
    bgImg: string
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--datav-panel-color);
    //background: center / contain no-repeat url(${props => props.bgImg});
`
const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  height: 100%;
  max-width: 320px;
  margin-left: 100px;
`
const Img = styled.img`
  display: block;
  height: auto;
  max-width: 800px;
  user-select: none;
`
const Col = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`
const Show = styled.p`
  font-size: 42px;
  color: var(--datav-font-color);
`
const Input = styled.input`
  width: 350px;
  height: 40px;
  margin: 5px 10px;
  font-family: 幼圆, serif;
  background-color: aliceblue;
  border-radius: 20px;
  padding-left: 20px;
  font-size: 14px;
`
