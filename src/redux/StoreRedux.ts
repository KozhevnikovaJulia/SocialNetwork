import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import {profileReducer} from "./ProfileReducer"
import {dialogsReducer} from "./DialogsReducer"
import { usersReducer } from "./UsersReducer"
import { authReducer } from "./AuthReducer"
import { appReducer } from "./AppReducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"


let redusers = combineReducers (
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer
    }
)

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>
let state:AppStateType;

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(redusers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ))

// export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
