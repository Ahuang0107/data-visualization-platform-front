import React from "react";
import {Route, Switch} from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"))
const Main = React.lazy(() => import("../pages/Main"))

export default function Routes(): JSX.Element {
    return (
        <React.Suspense
            fallback={
                <div>fallback</div>
            }
        >
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Main" component={Main}/>
            </Switch>
        </React.Suspense>
    )
}
