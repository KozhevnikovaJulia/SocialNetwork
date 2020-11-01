import { combineReducers, createStore } from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


let redusers = combineReducers (
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        
    }
)

type RedusersType = typeof redusers
type AppStateType = ReturnType<RedusersType>
let state:AppStateType;

export let store = createStore (redusers)
// @ts-ignore