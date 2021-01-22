import {ProfileAPI} from "../api/api"
import {ACTIONS_TYPE} from "./enumActionsType"

let initialState = {
    posts: [
        { id: 1, message: "It is my first post", likesCount: 0 },
        { id: 2, message: "Hi", likesCount: 4 },
        { id: 3, message: "Hello", likesCount: 5 }
    ] as Array<PostsType>,
    profile: null,
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
        default: return state
    }
}
export const addPost = (newPost: any) => ({type: ACTIONS_TYPE.ADD_POST, newPost} as const)
export const setUserProfile = (profile: any) => ({type: ACTIONS_TYPE.SET_USER_PROFILE, profile } as const)
export const setStatus = (status: string) => ({type: ACTIONS_TYPE.SET_STATUS, status } as const)
export const removePost = (postId: number) => ({type: ACTIONS_TYPE.REMOVE_POST, postId} as const)

export const getProfile = (userId: number) => 
async (dispatch: any) => {     
    let response = await ProfileAPI.getUserProfile(userId)           
         dispatch(setUserProfile(response.data))    
}
export const getStatus = (userId: number) => 
async (dispatch: any) => {     
    let response = await ProfileAPI.getStatus(userId)           
         dispatch(setStatus(response.data))    
}
export const updateStatus = (status: string) => 
async (dispatch: any) => {     
    let response = await ProfileAPI.updateStatus(status)             
            if (response.data.resultCode === 0){
                dispatch(setStatus(status))            }                    
    
}

//types
export type InitialStateType = typeof initialState

export type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus> | ReturnType<typeof removePost>

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
