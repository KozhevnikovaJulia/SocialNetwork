import React from "react"
import {Users} from "./Users"
import {Preloader} from "../../common/Preloader/Preloader"
import { getUsers, follow, unfollow } from "../../redux/UsersReducer"
import {connect, ConnectedProps} from "react-redux"
import {getUsersSelector, getPageSizeSelector, getUsersTotalCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector } from "../../redux/UsersSelectors"

export class UsersContainer extends React.Component<PropsFromRedux> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)       
    }  
onCgangePage = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)    
}
render = () => {
    return <div>
        
        {this.props.isFetching ? <Preloader/> : null}
        
        <Users 
    users= {this.props.users}
    pageSize= {this.props.pageSize}
    usersTotalCount= {this.props.usersTotalCount}
    currentPage= {this.props.currentPage}
    onChangePage={this.onCgangePage}
    followingInProgress= {this.props.followingInProgress}
    follow={this.props.follow}
    unfollow={this.props.unfollow} />
      
    </div>
}
}

// let mapStateToProps = (state: any) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         usersTotalCount: state.usersPage.usersTotalCount,
//         currentPage: state.usersPage.currentPage,    
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress    
//     }
// }

let mapStateToProps = (state: any) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        usersTotalCount: getUsersTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),    
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state)    
    }
}
 
const connector = connect(mapStateToProps , {  getUsers, follow, unfollow })
  
  type PropsFromRedux = ConnectedProps<typeof connector>

export default connect (mapStateToProps,
    { getUsers, follow, unfollow } )
     (UsersContainer)