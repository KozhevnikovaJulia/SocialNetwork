import {AuthAPI} from "../api/api"
import {Dispatch} from "redux"
import {stopSubmit} from "redux-form"
import {ACTIONS_TYPE} from "./enumActionsType"

let initialState: InitialStateType = {
    id: null as number | null,
    email: null as string | null,    
   login: "Julia" as string | null,
   isAuth: false
}

export const authReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        
        case ACTIONS_TYPE.SET_USER_DATA: {
           let stateCopy = { ...state,
        ...action.data }               
      
           return stateCopy
        }            
        default: return state
    }
}

export const setUserData = ( id: number | null, email:string | null, login: string | null, isAuth: boolean) => ({type: ACTIONS_TYPE.SET_USER_DATA, data: {id, email, login, isAuth}}as const)

export const getMe = () => async (dispatch: Dispatch) => {

    let response = await AuthAPI.getAuthMe()
    if (response.data.resultCode === 0) {
        let { id, email, login, isAuth } = response.data.data
        dispatch(setUserData(id, email, login, true))
    }

}

export const login = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: any) => {
        let response = await AuthAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getMe())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", { _error: message }))
        }
    }

export const logout = () =>
    async (dispatch: any) => {
        let response = await AuthAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    }

//types

export type SetUserDataActionType = ReturnType<typeof setUserData>
type ActionsType = SetUserDataActionType

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type InitialStateType = {
    id: number | null
    email: string | null    
   login: string | null
   isAuth: boolean
}
