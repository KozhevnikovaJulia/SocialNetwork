import {ProfileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"
const REMOVE_POST = "REMOVE-POST"

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
        case ADD_POST: {
            let newPstBody = action.newPost
            return {
                ...state,
                posts: [...state.posts, { id: 7, likesCount: 5, message: newPstBody }]
            }
        }
        case REMOVE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE: {
            let stateCopy = { ...state }
            stateCopy.profile = action.profile
            return stateCopy
        }
        case SET_STATUS: {
            let stateCopy = { ...state }
            stateCopy.status = action.status
            return stateCopy
        }
        default: return state
    }
}
export const addPost = (newPost: any) => ({type: "ADD-POST", newPost} as const)
export const setUserProfile = (profile: any) => ({type: "SET-USER-PROFILE", profile } as const)
export const setStatus = (status: string) => ({type: "SET-STATUS", status } as const)
export const removePost = (postId: number) => ({type: "REMOVE-POST", postId} as const)

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

//types
export type InitialStateType = typeof initialState

export type ActionsType = ReturnType<typeof addPost> | ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus> | ReturnType<typeof removePost>

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
