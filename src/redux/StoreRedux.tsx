import { combineReducers, createStore } from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import { usersReducer } from "./UsersReducer";
import { authReducer } from "./AuthReducer";

// export const addPostActionCreator = (): ActionTypes  => ({type: "ADD-POST"})
// export const changePostActionCreator = (postMessage: string): ActionTypes  => ({type: "CHANGE-POST", postMessage })
// export const sendMessageActionCreator = (): ActionTypes  => ({type: "SEND-MESSAGE"})
// export const changeMessageActionCreator = (messageText: string): ActionTypes  => ({type: "CHANGE-MESSAGE", messageText })


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

export let store = createStore (redusers)
// @ts-ignore