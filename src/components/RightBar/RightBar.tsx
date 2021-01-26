import React from "react"
import style from "./RightBar.module.css"
import { UserType } from "../../redux/UsersReducer"
import {FollowUser} from "./FollowUser/FollowUser"

type RightBarPropsType = {
  users: Array<UserType>
  pageSize: number
  usersTotalCount: number
  currentPage: number
  onChangePage: (pageNumber: number)=> void
  followingInProgress: Array<number>
  follow:(userId: number)=> void
  unfollow: (userId: number)=> void
}


export const RightBar = React.memo (({users, pageSize, usersTotalCount, currentPage, onChangePage, followingInProgress, follow, unfollow}: RightBarPropsType) => {

  return (
      <nav className={style.rightBur}>
     {users
     .filter(u => u.followed)
     .map(u => <FollowUser key={u.id} user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/>      

        )
        }
      </nav>

  )}
)
