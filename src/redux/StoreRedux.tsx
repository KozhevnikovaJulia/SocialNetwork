import { applyMiddleware, combineReducers, createStore } from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import { usersReducer } from "./UsersReducer";
import { authReducer } from "./AuthReducer";
import thunkMiddleware from "redux-thunk"


let redusers = combineReducers (
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
)

type RedusersType = typeof redusers
export type AppStateType = ReturnType<RedusersType>
let state:AppStateType;

export let store = createStore (redusers, applyMiddleware (thunkMiddleware))
// @ts-ignore