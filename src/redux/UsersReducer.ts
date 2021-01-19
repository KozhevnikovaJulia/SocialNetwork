import {UserAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET-USERS"
const SETCURRENTPAGE = "SET-CURRENT-PAGE"
const SETUSERSTOTALCOUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLEISFATCHING = "TOGGLE-IS-FETCHING"
const TOGGLEFOLLOWINGINPROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS"

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
        case FOLLOW: {

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
        case UNFOLLOW: {
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
        case SETUSERS: {
            let stateCopy = {
                ...state,
                users: action.users
            }
            return stateCopy
        }
        case SETCURRENTPAGE: {
            let stateCopy = {
                ...state,
            currentPage: action.currentPage}   
            return stateCopy
        }
        case SETUSERSTOTALCOUNT: {
            let stateCopy = {
                ...state,
            usersTotalCount: action.usersTotalCount}    
            return stateCopy
        }
        case TOGGLEISFATCHING: {
            let stateCopy = {
                ...state,
            isFetching: action.isFetching}    
            return stateCopy
        }
        case TOGGLEFOLLOWINGINPROGRESS: {
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
export const followSuccess = (actionId: number) => ({type: "FOLLOW", actionId}as const)
export const unfollowSuccess = (actionId: number)  => ({type: "UNFOLLOW", actionId}as const)
export const setUsers = (users: Array<UserType>) => ({type: "SET-USERS", users}as const)
export const setCurrentPage = (currentPage:number) => ({type: "SET-CURRENT-PAGE", currentPage}as const)
export const setUsersTotalCount = (usersTotalCount:number)  => ({type: "SET-USERS-TOTAL-COUNT", usersTotalCount}as const)
export const toggleIsFetching = (isFetching:boolean)  => ({type: "TOGGLE-IS-FETCHING", isFetching}as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number)=> ({type: "TOGGLE-FOLLOWING-IN-PROGRESS", isFetching, userId}as const)


export const getUsers = (currentPage: number, pageSize: number) =>
    (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        UserAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.data.items))
                dispatch(setUsersTotalCount(response.data.totalCount))
            })
    }

export const follow = (userId: number) =>
    (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        UserAPI.postUserFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
    }

export const unfollow = (userId: number) =>
    (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        UserAPI.deleteUserFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            })
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