import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import './index.less';
import App from './App';



const getConfig = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
}
ReactDOM.render(
    <Router getUserConfirmation={ getConfig } keyLength={ 12 }>
        <App />
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
