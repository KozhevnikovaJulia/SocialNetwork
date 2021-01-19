import {UserAPI} from "../api/api";

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/FUNFOLLOW"
const SETUSERS = "users/FSET-USERS"
const SETCURRENTPAGE = "users/FSET-CURRENT-PAGE"
const SETUSERSTOTALCOUNT = "users/FSET-USERS-TOTAL-COUNT"
const TOGGLEISFATCHING = "users/FTOGGLE-IS-FETCHING"
const TOGGLEFOLLOWINGINPROGRESS = "users/FTOGGLE-FOLLOWING-IN-PROGRESS"

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
export const followSuccess = (actionId: number) => ({type: FOLLOW, actionId}as const)
export const unfollowSuccess = (actionId: number)  => ({type: UNFOLLOW, actionId}as const)
export const setUsers = (users: Array<UserType>) => ({type: SETUSERS, users}as const)
export const setCurrentPage = (currentPage:number) => ({type: SETCURRENTPAGE, currentPage}as const)
export const setUsersTotalCount = (usersTotalCount:number)  => ({type: SETUSERSTOTALCOUNT, usersTotalCount}as const)
export const toggleIsFetching = (isFetching:boolean)  => ({type: TOGGLEISFATCHING, isFetching}as const)
export const toggleFollowingInProgress = (isFetching: boolean, userId: number)=> ({type: TOGGLEFOLLOWINGINPROGRESS, isFetching, userId}as const)


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