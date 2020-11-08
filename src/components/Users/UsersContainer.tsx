import {Users} from "./UsersClass";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, UserType} from "../../redux/UsersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users        
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        follow: (actionId: number) => {
            dispatch(followActionCreator (actionId))
        },
        unfollow:  (actionId: number) => {
            dispatch(unfollowActionCreator(actionId))
        },
        setUsers:  (users: Array<UserType >) => {
            dispatch(setUsersActionCreator(users))
        },
    }
}
export const UsersContainer = connect (mapStateToProps,mapDispatchToProps )(Users)