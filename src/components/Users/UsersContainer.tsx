import React, { ChangeEvent } from "react";
import { UserType } from "../../redux/UsersReducer";
import Axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader"
import {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingInProgress } from "../../redux/UsersReducer";
import {connect, ConnectedProps} from "react-redux";
import {UserAPI} from "../../api/api"



// type UsersPropsType = {
//     users: Array<UserType>
//     pageSize: number
//     usersTotalCount: number
//     currentPage: number
//     isFetching: boolean
//     follow: (actionId: number) => void
//     unfollow: (actionId: number) => void
//     setUsers: (users: Array<UserType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setUsersTotalCount: (usersTotalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     followingInProgress: Array<number>
//     toggleFollowingInProgress: (followingInProgress: boolean, userId: number) => void
// }


export class UsersContainer extends React.Component<PropsFromRedux> {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        // Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`, { withCredentials: true })
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
           this.props.setUsersTotalCount(response.data.totalCount)
        })
    }  
onCgangePage = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    // Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`, { withCredentials: true })
    UserAPI.getUsers(pageNumber, this.props.pageSize)
    .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
    })
}
render = () => {
    return <div>
        
        {this.props.isFetching ? <Preloader/> : null}
        
        <Users 
    users= {this.props.users}
    pageSize= {this.props.pageSize}
    usersTotalCount= {this.props.usersTotalCount}
    currentPage= {this.props.currentPage}
    follow= {this.props.follow}
    unfollow= {this.props.unfollow}
    onChangePage={this.onCgangePage}
    followingInProgress= {this.props.followingInProgress}
    toggleFollowingInProgress= {this.props.toggleFollowingInProgress} />
      
    </div>
}
}


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,    
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress    
    }
}

 
const connector = connect(mapStateToProps , { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount,  toggleIsFetching, toggleFollowingInProgress})
  
//   // The inferred type will look like:
//   // {isOn: boolean, toggleOn: () => void}
  type PropsFromRedux = ConnectedProps<typeof connector>
  
//   type Props = PropsFromRedux & {
//     backgroundColor: string
//   }
export default connect (mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount,  toggleIsFetching, toggleFollowingInProgress } )
     (UsersContainer)