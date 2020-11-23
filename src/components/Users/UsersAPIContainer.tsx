import React, { ChangeEvent } from "react";
import { UserType } from "../../redux/UsersReducer";
import Axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader"


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


export class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}& count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
           this.props.setUsersTotalCount(response.data.totalCount)
        })
    }  
onCgangePage = (pageNumber: number) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}& count=${this.props.pageSize}`).then(response => {
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