import React, {useEffect, useState} from "react";
import ReactJson from "react-json-view";

export default function JsonViewer(props: {
    code: any
}): JSX.Element {
    const [code, setCode] = useState(props.code)
    useEffect(() => {
        setCode(props.code)
    }, [props.code])
    return (
        <ReactJson src={code}
                   theme={"tomorrow"}/>
    )
}
