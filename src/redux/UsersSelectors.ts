import { AppStateType } from "./StoreRedux"

export const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
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
