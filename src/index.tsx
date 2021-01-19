import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import {store} from "./redux/StoreRedux"
import {Provider} from "react-redux"
import {HashRouter} from "react-router-dom"



ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)
serviceWorker.unregister()
