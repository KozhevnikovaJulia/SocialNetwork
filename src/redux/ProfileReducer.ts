import {ProfileAPI} from "../api/api"
import {ACTIONS_TYPE} from "./enumActionsType"
import { handleServerAppError,  handleServerNetworkError} from "../util/errorUtils"
import {stopSubmit} from "redux-form"

let initialState = {
    posts: [
        { id: 1, message: "It is my first post", likesCount: 0 },
        { id: 2, message: "Hi", likesCount: 4 },
        { id: 3, message: "Hello", likesCount: 5 }
    ] as Array<PostsType>,
    profile: {},
    status: ""
}

export const profileReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST: {
            let newPstBody = action.newPost
            return {
                ...state,
                posts: [...state.posts, { id: 7, likesCount: 5, message: newPstBody }]
            }
        }
        case ACTIONS_TYPE.REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case ACTIONS_TYPE.SET_USER_PROFILE: {
            let stateCopy = { ...state }
            stateCopy.profile = action.profile
            return stateCopy
        }
        case ACTIONS_TYPE.SET_STATUS: {
            let stateCopy = { ...state }
            stateCopy.status = action.status
            return stateCopy
        }
        case ACTIONS_TYPE.SAVE_PHOTO_SUCCESS: {
            return { ...state,
                profile: {...state.profile,
                photos: action.photos }
             }
            
        }
        default: return state
    }
}
export const addPost = (newPost: any) => ({type: ACTIONS_TYPE.ADD_POST, newPost} as const)
export const setUserProfile = (profile: any) => ({type: ACTIONS_TYPE.SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({type: ACTIONS_TYPE.SET_STATUS, status } as const)
export const removePost = (postId: number) => ({type: ACTIONS_TYPE.REMOVE_POST, postId} as const)
export const savePhotoSuccess = (photos: any) => ({type: ACTIONS_TYPE.SAVE_PHOTO_SUCCESS, photos} as const)

export const getProfile = (userId: number) => 
async (dispatch: any) => {     
    try {
        let response = await ProfileAPI.getUserProfile(userId)           
        dispatch(setUserProfile(response.data)) 
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }       
}

export const getStatus = (userId: number) => 
async (dispatch: any) => {    
    try {
        let response = await ProfileAPI.getStatus(userId)           
        dispatch(setStatus(response.data)) 
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }       
}

export const updateStatus = (status: string) => 
    async (dispatch: any) => {
        try {
            let response = await ProfileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }    
}

export const savePhoto = (file: any) =>
    async (dispatch: any) => {
        try {
            let response = await ProfileAPI.savePhoto(file)
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }
    }

export const saveProfile = (profile: ProfileType) => 

async (dispatch: any, getState: any) => {  
    debugger
    let  userId = getState().auth.id
    try {
        let response = await ProfileAPI.saveProfile(profile)             
        if (response.data.resultCode === 0){
            dispatch(getProfile (userId))         
        } else {           
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit('profileDataForm', { _error: message }))
            return Promise.reject(response.data.messages[0] )
        }     
    } catch (error) {
        handleServerNetworkError(error, dispatch)
    }            
}

//types
export type InitialStateType = typeof initialState

export type ActionsType = 
| ReturnType<typeof addPost> 
| ReturnType<typeof setUserProfile> 
| ReturnType<typeof setStatus> 
| ReturnType<typeof removePost>
| ReturnType<typeof savePhotoSuccess>

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    userId: number
lookingForAJob: boolean
lookingForAJobDescription: string
fullName: string
aboutMe: string
contacts: ContactsType
photos: PhotosType
}

export type ContactsType ={
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}
