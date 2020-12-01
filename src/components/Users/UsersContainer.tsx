import React, { ChangeEvent } from "react";
import { UserType } from "../../redux/UsersReducer";
import Axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader"
import {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from "../../redux/UsersReducer";
import {connect} from "react-redux";
import {UserAPI} from "../../api/api"



type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
    isFetching: boolean
    follow: (actionId: number) => void
    unfollow: (actionId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setUsersTotalCount: (usersTotalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


export class UsersContainer extends React.Component<UsersPropsType> {
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
    onChangePage={this.onCgangePage}/>
      
    </div>
}
}


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,    
        isFetching: state.usersPage.isFetching    
    }
}

export default connect (mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount,  toggleIsFetching } )
     (UsersContainer)