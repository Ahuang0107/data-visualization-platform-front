import React from "react";
import Lottie from 'react-lottie';
import {LottieLoading} from "../assets/lottie";
import styled from "styled-components";

export default function Fallback(props: {}): JSX.Element {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieLoading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <CenterWrap>
            <Lottie options={defaultOptions}
                    height={400}
                    width={400}/>
        </CenterWrap>
    )
}
const CenterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
`
