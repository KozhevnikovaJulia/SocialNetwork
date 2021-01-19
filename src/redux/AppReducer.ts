import {Dispatch} from "redux"
import { getMe, SetUserDataActionType } from "./AuthReducer"

const INITIALIZED_SUCCESSED = "app/INITIALIZED-SUCCESSED"

let initialState: InitialStateType = {
    isInitialized: false
}

export const appReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        
        case INITIALIZED_SUCCESSED: {
            let stateCopy = {
                ...state,
                isInitialized: true
            }             
           return stateCopy
        }            
        default: return state
    }
}

export const InitializedSuccessedAC = () => ({ type: INITIALIZED_SUCCESSED} as const)

export const initializeApp = () => async (dispatch: any) => {
    let promise = dispatch(getMe())
    let response = await Promise.all ([promise])   
        dispatch(InitializedSuccessedAC())   
}

//types

export type InitialStateType = {
   isInitialized: boolean
}

type ActionsType = ReturnType<typeof InitializedSuccessedAC> 

type ThunkDispatch = Dispatch <ActionsType | SetUserDataActionType >