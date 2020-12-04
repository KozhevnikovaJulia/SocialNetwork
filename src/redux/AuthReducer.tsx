import {AuthAPI} from "../api/api";

const SET_USER_DATA= "SET-USER-DATA"

export type ActionTypes =  SetLoginActionType 

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
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
    id: null,
    email: null,    
   login: "Julia",
   isAuth: false
}

export const authReducer = (state= initialState, action: ActionTypes): InitialStateType => {
    
    switch (action.type) {
        
        case SET_USER_DATA: {
           let stateCopy = { ...state,
        ...action.data }    
        stateCopy.isAuth = true      
      
           return stateCopy
        }            
        default: return state
    }
}

export const setUserData = ( id: number, email:string, login: string): ActionTypes  => ({type: SET_USER_DATA, data: {id, email, login}})
export const getMe = () =>
    (dispatch: any) => {
        AuthAPI.getAuthMe()
        .then(response => {            
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
               dispatch(setUserData(id, email, login))                
            }
        })
    }
