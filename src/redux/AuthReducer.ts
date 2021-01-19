import {AuthAPI} from "../api/api"
import {Dispatch} from "redux"
import {stopSubmit} from "redux-form"

const SET_USER_DATA= "SET-USER-DATA"

let initialState: InitialStateType = {
    id: null as number | null,
    email: null as string | null,    
   login: "Julia" as string | null,
   isAuth: false
}

export const authReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        
        case SET_USER_DATA: {
           let stateCopy = { ...state,
        ...action.data }               
      
           return stateCopy
        }            
        default: return state
    }
}

export const setUserData = ( id: number | null, email:string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, data: {id, email, login, isAuth}}as const)

export const getMe = () => (dispatch: Dispatch) => {
       return AuthAPI.getAuthMe()
        .then(response => {            
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data
               dispatch(setUserData(id, email, login, true))                
            }
        })
    }
   
    export const login = ( email: string, password:string, rememberMe: boolean) =>     
    (dispatch: any) => {
        AuthAPI.login( email, password, rememberMe)
        .then(response => {            
            if (response.data.resultCode === 0) {
               dispatch(getMe())                
            } else {      
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"       
        dispatch (stopSubmit ("login", {_error: message}))
            }
        })
    }

    export const logout = () => 
    (dispatch: any) => {
        AuthAPI.logout()
        .then(response => {            
            if (response.data.resultCode === 0) {
                dispatch(setUserData (null, null, null, false))           
            }
        })
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
