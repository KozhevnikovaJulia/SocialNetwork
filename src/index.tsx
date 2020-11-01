import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./redux/StoreRedux";


export let rerenderTree = (state:any)=> {
    ReactDOM.render(
        <React.StrictMode>
                <App store={store} />
            {/* <App state={state} dispatch={store.dispatch.bind(store)}  /> */}
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
