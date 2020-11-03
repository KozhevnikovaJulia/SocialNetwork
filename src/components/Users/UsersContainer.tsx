import {Users} from "./Users";
import {followActionCreator, unfollowActionCreator} from "../../redux/UsersReducer";
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
        }
    }
}
export const UsersContainer = connect (mapStateToProps,mapDispatchToProps )(Users)