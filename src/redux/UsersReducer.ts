import {UserAPI} from "../api/api"
import {ACTIONS_TYPE} from "./enumActionsType"

let initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 10,
    usersTotalCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [1,2]
   }

export const usersReducer = (state= initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {

            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.actionId) {
                        return { ...u, followed: true,
                        }
                    } else { return u }
                })
            }
            return stateCopy
        }
        case ACTIONS_TYPE.UNFOLLOW: {
            let stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.actionId) {
                        return {
                            ...u, followed: false,
                        }
                    } else { return u }
                })
            }
            return stateCopy
        }
        case ACTIONS_TYPE.SETUSERS: {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy
        }
        case ACTIONS_TYPE.SETCURRENTPAGE: {
            let stateCopy = {
                ...state,
            currentPage: action.currentPage}   
            return stateCopy
        }
        case ACTIONS_TYPE.SETUSERSTOTALCOUNT: {
            let stateCopy = {
                ...state,
            usersTotalCount: action.usersTotalCount}    
            return stateCopy
        }
        case ACTIONS_TYPE.TOGGLEISFATCHING: {
            let stateCopy = {
                ...state,
            isFetching: action.isFetching}    
            return stateCopy
        }
        case ACTIONS_TYPE.TOGGLEFOLLOWINGINPROGRESS: {
            let stateCopy = {
                ...state,                 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=>id != action.userId)
            }
            return stateCopy
        }
        default: return state
    }
}
export const followSuccess = (actionId: number) => ({type: ACTIONS_TYPE.FOLLOW, actionId}as const)
export const unfollowSuccess = (actionId: number)  => ({type: ACTIONS_TYPE.UNFOLLOW, actionId}as const)
export const setUsers = (users: Array<UserType>) => ({type: ACTIONS_TYPE.SETUSERS, users}as const)
export const setCurrentPage = (currentPage:number) => ({type: ACTIONS_TYPE.SETCURRENTPAGE, currentPage}as const)
export const setUsersTotalCount = (usersTotalCount:number)  => ({type: ACTIONS_TYPE.SETUSERSTOTALCOUNT, usersTotalCount}as const)
export const toggleIsFetching = (isFetching:boolean)  => ({type: ACTIONS_TYPE.TOGGLEISFATCHING, isFetching}as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number)=> ({type: ACTIONS_TYPE.TOGGLEFOLLOWINGINPROGRESS, isFetching, userId}as const)


export const getUsers = (currentPage: number, pageSize: number) =>
    async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await UserAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setUsersTotalCount(response.data.totalCount))

    }

export const follow = (userId: number) =>
    async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        let response = await UserAPI.postUserFollow(userId)            
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))            
    }

export const unfollow = (userId: number) =>
    async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        let response = await UserAPI.deleteUserFollow(userId)            
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))            
    }

   //types

type ActionsType = 
| ReturnType<typeof followSuccess> 
| ReturnType<typeof unfollowSuccess> 
| ReturnType<typeof setUsers> 
| ReturnType<typeof setCurrentPage> 
| ReturnType<typeof setUsersTotalCount> 
| ReturnType<typeof toggleIsFetching> 
| ReturnType<typeof toggleFollowingInProgress> 

export type PhotosType = {
    small: null | string
    large: null | string
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: PhotosType
    status: string   
    followed: boolean
}

export type InitialStateType = typeof initialState