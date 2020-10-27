import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/State";


export let rerenderTree = ()=> {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store._state} dispatch={store.dispatch.bind(store)}  />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree();
store.subscriber(rerenderTree);
serviceWorker.unregister();
