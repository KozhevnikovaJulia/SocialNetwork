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
}


let initialState: InitialStateType = {
    id: null,
    email: null,    
   login: null,
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

export const setUserData = ( data:DataType): ActionTypes  => ({type: SET_USER_DATA, data})
