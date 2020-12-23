import {ProfileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

export type ActionTypes = 
| AddPostActionType 
| SendMessageActionType 
| ChangeMessageActionType
|SetUserProfileActionType 
|SetStatusActionType 

type AddPostActionType = {
type:"ADD-POST"
newPost: any
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
type ChangeMessageActionType = {
    type: "CHANGE-MESSAGE"
    messageText: string
}
type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile:  any
}
type SetStatusActionType = {
    type: "SET-STATUS",
    status:  string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type InitialStateType = typeof initialState

let initialState = {
    posts: [
        { id: 1, message: "It is my first post", likesCount: 0 },
        { id: 2, message: "Hi", likesCount: 4 },
        { id: 3, message: "Hello", likesCount: 5 }
    ] as Array<PostsType>,
    profile: null,
    status: ""
}

export const profileReducer = (state= initialState, action: ActionTypes): InitialStateType => {
    
    switch (action.type) {
        case ADD_POST: {
            let newPstBody = action.newPost
            return {
                ...state,
                posts: [...state.posts, {id:7, likesCount: 5, message: newPstBody}]
            }
        }
         case SET_USER_PROFILE: {
            let stateCopy = {...state}
            stateCopy.profile= action.profile          
            return stateCopy
         }
         case SET_STATUS: {
            let stateCopy = {...state}
            stateCopy.status= action.status          
            return stateCopy
         }
        default: return state
    }
}
export const addPost = (newPost: any): ActionTypes  => ({type: "ADD-POST", newPost})
export const setUserProfile = (profile: any): ActionTypes  => ({type: "SET-USER-PROFILE", profile })
export const setStatus = (status: string): ActionTypes  => ({type: "SET-STATUS", status })

export const getProfile = (userId: string) => 
(dispatch: any) => {     
    ProfileAPI.getUserProfile(userId)
    .then(response => {          
         dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: string) => 
(dispatch: any) => {     
    ProfileAPI.getStatus(userId)
    .then(response => {          
         dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => 
(dispatch: any) => {     
    ProfileAPI.updateStatus(status)
        .then(response => {          
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))
            }                    
    })
}