const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET-USERS"
const SETCURRENTPAGE = "SET-CURRENT-PAGE"
const SETUSERSTOTALCOUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLEISFATCHING = "TOGGLE-IS-FETCHING"
const TOGGLEFOLLOWINGINPROGRESS = "TOGGLE-FOLLOWING-IN-PROGRESS"

export type ActionTypes = 
| FollowActionType 
| UnfollowActionType 
| SetUsersActionType 
| SetCurrentPageActionType
| SetUsersTotalCountActionType
| ToggleIsFetchingActionType
| TogglFollowingInProgressActionType

type FollowActionType = {
type: "FOLLOW" 
actionId: number
}
type UnfollowActionType = {
    type:"UNFOLLOW"
    actionId: number
}
type SetUsersActionType = {
    type:"SET-USERS"
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type:"SET-CURRENT-PAGE"
    currentPage: number
}
type SetUsersTotalCountActionType = {
    type:"SET-USERS-TOTAL-COUNT"
    usersTotalCount: number
}
type ToggleIsFetchingActionType = {
    type:"TOGGLE-IS-FETCHING"
    isFetching: boolean
}
type TogglFollowingInProgressActionType = {
    type: "TOGGLE-FOLLOWING-IN-PROGRESS"
    // followingInProgress: Array<number>
    userId: number
    isFetching: boolean
    }

type PhotosType = {
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

type InitialStateType = typeof initialState

let initialState = {
    users: [ ] as Array<UserType>,
    pageSize: 10,
    usersTotalCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [1,2]
   }

export const usersReducer = (state= initialState, action: ActionTypes): InitialStateType => {
    
    switch (action.type) {
        case FOLLOW: {

            let stateCopy = {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.actionId) {
                        return { ...u, followed: true,
                            // location: { ...u.location } 
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
                            // location: { ...u.location }
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
export const follow = (actionId: number): ActionTypes  => ({type: "FOLLOW", actionId})
export const unfollow = (actionId: number): ActionTypes  => ({type: "UNFOLLOW", actionId})
export const setUsers = (users: Array<UserType>): ActionTypes  => ({type: "SET-USERS", users})
export const setCurrentPage = (currentPage:number): ActionTypes  => ({type: "SET-CURRENT-PAGE", currentPage})
export const setUsersTotalCount = (usersTotalCount:number): ActionTypes  => ({type: "SET-USERS-TOTAL-COUNT", usersTotalCount})
export const toggleIsFetching = (isFetching:boolean): ActionTypes  => ({type: "TOGGLE-IS-FETCHING", isFetching})
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ActionTypes  => ({type: "TOGGLE-FOLLOWING-IN-PROGRESS", isFetching, userId})


