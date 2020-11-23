const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET-USERS"
const SETCURRENTPAGE = "SET-CURRENT-PAGE"
const SETUSERSTOTALCOUNT = "SET-USERS-TOTAL-COUNT"
const TOGGLEISFATCHING = "TOGGLE-IS-FETCHING"

export type ActionTypes = 
| FollowActionType 
| UnfollowActionType 
| SetUsersActionType 
| SetCurrentPageActionType
| SetUsersTotalCountActionType
| ToggleIsFetchingActionType
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
    users: [
        // { id: 1, avatarUserUrl:"https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Julia Kozhevnikova", status: "I am a student", location: {city: "Moscow", country: "Russia"} },
        // { id: 2, avatarUserUrl:"https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: false, fullName: "Alisa Kozhevnikova", status: "I am a child", location: {city: "Moscow", country: "Russia"} },
        // { id: 3, avatarUserUrl:"https://images.pexels.com/photos/2182999/pexels-photo-2182999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Alina Kozhevnikova", status: "I am a child", location: {city: "Moscow", country: "Russia"} },
        // { id: 4, avatarUserUrl:"https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Bob Bush", status: "I am a Bob", location: {city: "Moscow", country: "Russia"} },
    ] as Array<UserType>,
    pageSize: 10,
    usersTotalCount:0,
    currentPage: 1,
    isFetching: true
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
        default: return state
    }
}
export const followActionCreator = (actionId: number): ActionTypes  => ({type: "FOLLOW", actionId})
export const unfollowActionCreator = (actionId: number): ActionTypes  => ({type: "UNFOLLOW", actionId})
export const setUsersActionCreator = (users: Array<UserType>): ActionTypes  => ({type: "SET-USERS", users})
export const setCurrentPageActionCreator = (currentPage:number): ActionTypes  => ({type: "SET-CURRENT-PAGE", currentPage})
export const setUsersTotalCountActionCreator = (usersTotalCount:number): ActionTypes  => ({type: "SET-USERS-TOTAL-COUNT", usersTotalCount})
export const toggleIsFetchingActionCreator = (isFetching:boolean): ActionTypes  => ({type: "TOGGLE-IS-FETCHING", isFetching})

