import React from "react";
import {History, LocationState} from "history";

export default function Login(props: {
    history: History<LocationState>
}): JSX.Element {

    return (
        <>
            Login
            <button onClick={() => {
                props.history.push('Main')
            }}>跳转</button>
        </>
    )
}
