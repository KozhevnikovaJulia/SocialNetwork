import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./State/State";


export let rerenderTree = ()=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store._state} addPost={store.addPost.bind(store)} changePost={store.changePost.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree();
store.subscriber(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
