import {Dispatch} from "redux"
import { getMe, SetUserDataActionType } from "./AuthReducer"
import {ACTIONS_TYPE} from "./enumActionsType"

let initialState: InitialStateType = {
    isInitialized: false,
    error: null
}

export const appReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        
        case ACTIONS_TYPE.INITIALIZED_SUCCESSED: {
            return { ...state,
                isInitialized: true
            }             
        }     
        case ACTIONS_TYPE.SET_ERROR: {
            return { ...state,
                error: action.error
            }             
        }              
        default: return state
    }
}

export const InitializedSuccessedAC = () => ({ type: ACTIONS_TYPE.INITIALIZED_SUCCESSED} as const)
export const setErrorAC = (error: string | null) => ({ type: ACTIONS_TYPE.SET_ERROR, error} as const)


export const initializeApp = () => async (dispatch: any) => {
    let promise = dispatch(getMe())
    let response = await Promise.all ([promise])   
        dispatch(InitializedSuccessedAC())   
}

//types

export type InitialStateType = {
   isInitialized: boolean
   error: null | string
}
export type SetErrorActionType = ReturnType<typeof setErrorAC> 

type ActionsType = ReturnType<typeof InitializedSuccessedAC> | SetErrorActionType

type ThunkDispatch = Dispatch <ActionsType | SetUserDataActionType >