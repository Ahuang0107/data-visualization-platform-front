import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import Routes from "./routes";
import './index.css';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory()

document.title = '数据可视化平台'
ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Routes/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
