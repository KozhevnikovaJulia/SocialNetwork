import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/StoreRedux";
import {Provider} from "react-redux"


export let rerenderTree = (state:any)=> {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());

store.subscribe ( ()=> {
    let state = store.getState();
    rerenderTree(state)
});
serviceWorker.unregister();
