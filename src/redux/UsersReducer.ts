import {UserAPI} from "../api/api"
import {ACTIONS_TYPE} from "./enumActionsType"
import { handleServerAppError,  handleServerNetworkError} from "../util/errorUtils"

let initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 10,
    usersTotalCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [1,2],
    filter: {
        term:''
    }
   }

export const usersReducer = (state= initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.actionId) {
                        return {
                            ...u, followed: true,
                        }
                    } else { return u }
                })
            }
        case ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.actionId) {
                        return {
                            ...u, followed: false,
                        }
                    } else { return u }
                })
            }
        case ACTIONS_TYPE.SETUSERS:
            return { ...state, users: action.users }
        case ACTIONS_TYPE.SETCURRENTPAGE:
            return { ...state, currentPage: action.currentPage }
        case ACTIONS_TYPE.SETUSERSTOTALCOUNT:
            return { ...state, usersTotalCount: action.usersTotalCount }
        case ACTIONS_TYPE.TOGGLEISFATCHING:
            return { ...state, isFetching: action.isFetching }
        case ACTIONS_TYPE.TOGGLEFOLLOWINGINPROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        case ACTIONS_TYPE.SET_FILTER:
            return { ...state, filter: action.payload }

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
export const setFilter = (term:string) => ({type: ACTIONS_TYPE.SET_FILTER, payload:{term}}as const)

export const getUsers = (currentPage: number, pageSize: number, term: string) =>
    async (dispatch: any) => {
        try {
            dispatch(toggleIsFetching(true))
            dispatch(setCurrentPage(currentPage))
            dispatch(setFilter(term))
            let response = await UserAPI.getUsers(currentPage, pageSize, term)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.data.items))
            dispatch(setUsersTotalCount(response.data.totalCount))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } 
    }

export const follow = (userId: number) =>
    async (dispatch: any) => {
        try {
            dispatch(toggleFollowingInProgress(true, userId))
            let response = await UserAPI.postUserFollow(userId)            
                    if (response.data.resultCode === 0) {
                        dispatch(followSuccess(userId))
                    }
                    dispatch(toggleFollowingInProgress(false, userId))   
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }                 
    }

export const unfollow = (userId: number) =>
    async (dispatch: any) => {
        try {
            dispatch(toggleFollowingInProgress(true, userId))
            let response = await UserAPI.deleteUserFollow(userId)            
                    if (response.data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId))
                    }
                    dispatch(toggleFollowingInProgress(false, userId))   
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        }                
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
| ReturnType<typeof setFilter> 

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
export type FilterType = typeof initialState.filter