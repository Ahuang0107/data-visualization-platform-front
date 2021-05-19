import React from "react";
import {Route, Switch} from "react-router-dom";
import Fallback from "./Fallback";

const Login = React.lazy(() => import("../pages/login/Login"))
const Home = React.lazy(() => import("../pages/home/Home"))
const Main = React.lazy(() => import("../pages/canvas/Main"))
const Preview = React.lazy(() => import("../pages/preview/Preview"))

export default function Routes(): JSX.Element {
    return (
        <React.Suspense
            fallback={
                <Fallback/>
            }
        >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Main/:id" component={Main}/>
                <Route exact path="/Preview/:id" component={Preview}/>
            </Switch>
        </React.Suspense>
    )
}
