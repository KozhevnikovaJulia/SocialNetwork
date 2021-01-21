import React from "react"
import { RightBur } from "./RightBur"
import style from "./RightBur.module.css"
import {Preloader} from "../../common/Preloader/Preloader"
import { getUsers, follow, unfollow } from "../../redux/UsersReducer"
import {connect, ConnectedProps} from "react-redux"
import {getUsersSuperSelector , getPageSizeSelector, getUsersTotalCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector } from "../../redux/UsersSelectors"



export class RightBurContainer extends React.PureComponent<PropsFromRedux> {
  componentDidMount = () => {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)       
  }  
onCgangePage = (pageNumber: number) => {
  this.props.getUsers(pageNumber, this.props.pageSize)    
}
render = () => {
  return <div>
      
      {this.props.isFetching ? <Preloader/> : null}
      
      <RightBur 
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

let mapStateToProps = (state: any) => {
  return {
      users: getUsersSuperSelector (state),
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
   (RightBurContainer)