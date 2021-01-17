import {AuthAPI} from "../api/api"
import {Dispatch} from "redux"
import { getMe, SetUserDataActionType } from "./AuthReducer"


let initialState: InitialStateType = {
    isInitialized: false
}

export const appReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        
        case "INITIALIZED-SUCCESSED": {
            let stateCopy = {
                ...state,
                isInitialized: true
            }             
           return stateCopy
        }            
        default: return state
    }
}

export const InitializedSuccessedAC = () => ({ type: "INITIALIZED-SUCCESSED"} as const)

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getMe())
    Promise.all ([promise])
    .then(() => {
        dispatch(InitializedSuccessedAC())
    })
}

//types

export type InitialStateType = {
   isInitialized: boolean
}

type ActionsType = ReturnType<typeof InitializedSuccessedAC> 

type ThunkDispatch = Dispatch <ActionsType | SetUserDataActionType >