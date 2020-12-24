import {AuthAPI} from "../api/api";
import {Dispatch} from "redux"

const SET_USER_DATA= "SET-USER-DATA"

export type ActionTypes =  SetLoginActionType 

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean 
}

type SetLoginActionType = {
type: typeof SET_USER_DATA
data: DataType
}

type InitialStateType = {
    id: number | null
    email: string | null    
   login: string | null
   isAuth: boolean
}


let initialState: InitialStateType = {
    id: null as number | null,
    email: null as string | null,    
   login: "Julia" as string | null,
   isAuth: false
}

export const authReducer = (state= initialState, action: ActionTypes): InitialStateType => {
    
    switch (action.type) {
        
        case SET_USER_DATA: {
           let stateCopy = { ...state,
        ...action.data }               
      
           return stateCopy
        }            
        default: return state
    }
}

export const setUserData = ( id: number | null, email:string | null, login: string | null, isAuth: boolean): ActionTypes  => ({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const getMe = () =>
    (dispatch: Dispatch) => {
        AuthAPI.getAuthMe()
        .then(response => {            
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data
               dispatch(setUserData(id, email, login, true ))                
            }
        })
    }
   
    export const login = ( email: string, password:string, rememberMe: boolean) => 
    (dispatch: any) => {
        AuthAPI.login( email, password, rememberMe)
        .then(response => {            
            if (response.data.resultCode === 0) {
               dispatch(getMe())                
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