import {Users} from "./Users";
import {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching} from "../../redux/UsersReducer";
import {connect} from "react-redux";
import { UsersAPIContainer } from "./UsersAPIContainer";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,    
        isFetching: state.usersPage.isFetching    
    }
}
// let mapDispatchToProps = (dispatch: Function) => {
//     return {
//         follow: (actionId: number) => {
//             dispatch(followActionCreator (actionId))
//         },
//         unfollow:  (actionId: number) => {
//             dispatch(unfollowActionCreator(actionId))
//         },
//         setUsers:  (users: Array<UserType >) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setUsersTotalCount: (usersTotalCount: number) => {
//             dispatch(setUsersTotalCountActionCreator(usersTotalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         },
        
//     }
// }
export const UsersContainer = connect (mapStateToProps,
     { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount,  toggleIsFetching } )
     (UsersAPIContainer)