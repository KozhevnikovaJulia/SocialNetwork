import { AppStateType } from "./StoreRedux"
import {createSelector} from "reselect"

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector (getUsersSelector, (users) => {
    return users.filter (u => true)
})
export const getPageSizeSelector = (state: AppStateType) => {
    return  state.usersPage.pageSize
}
export const getUsersTotalCountSelector = (state: AppStateType) => {
    return state.usersPage.usersTotalCount
}
export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress 
}
export const getUsersFilterSelector = (state: AppStateType) => {
    return state.usersPage.filter
}