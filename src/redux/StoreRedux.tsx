import { combineReducers, createStore } from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";


let redusers = combineReducers (
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        
    }
)

export let store = createStore (redusers)