import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware,createStore,compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
ReactDOM.render(
    <Provider  store={store}><App /></Provider>,
    document.querySelector('#root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default store;
