import React from "react"
import {Users} from "./Users"
import {Preloader} from "../../common/Preloader/Preloader"
import { getUsers, follow, unfollow, FilterType, UserType} from "../../redux/UsersReducer"
import {connect, ConnectedProps} from "react-redux"
import {AppStateType} from "../../redux/StoreRedux"
import {getUsersSuperSelector , getPageSizeSelector, getUsersTotalCountSelector, getCurrentPageSelector,
     getIsFetchingSelector, getFollowingInProgressSelector, getUsersFilterSelector } from "../../redux/UsersSelectors"

export class UsersContainer extends React.PureComponent<PropsFromRedux> {
    componentDidMount = () => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, "")
    }
    onCgangePage = (pageNumber: number, filter:FilterType) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter.term)
    }
    onFilterChanged = (filter:FilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter.term)
    }
    render = () => {
        return <div>

            {this.props.isFetching ? <Preloader /> : null}

        <Users 
    users= {this.props.users}
    pageSize= {this.props.pageSize}
    usersTotalCount= {this.props.usersTotalCount}
    currentPage= {this.props.currentPage}
    onChangePage={this.onCgangePage}
    followingInProgress= {this.props.followingInProgress}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    onFilterChanged={this.onFilterChanged} />
      
    </div>
}
}

let mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        users: getUsersSuperSelector (state),
        pageSize: getPageSizeSelector(state),
        usersTotalCount: getUsersTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),    
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
        filter: getUsersFilterSelector(state)  
    }
}
 
const connector = connect(mapStateToProps , {  getUsers, follow, unfollow })
  
  type PropsFromRedux = ConnectedProps<typeof connector>
  type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number  
    isFetching: boolean
    followingInProgress: Array<number>
    filter: FilterType 
  }

export default connect (mapStateToProps,
    { getUsers, follow, unfollow } )
     (UsersContainer)