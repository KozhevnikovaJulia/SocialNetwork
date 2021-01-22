import React from "react"
import style from "./Users.module.css"
import { UserType } from "../../redux/UsersReducer"
import mainImg from "../../assets/image/pexels-kim-van-vuuren-1590159.jpg"
import {Paginator} from "../../common/Paginator/Paginator"
import {User} from "./User"

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
    onChangePage: (pageNumber: number)=> void
    followingInProgress: Array<number>
    follow:(userId: number)=> void
    unfollow: (userId: number)=> void
}

export const Users = React.memo (({users, pageSize, usersTotalCount, currentPage, onChangePage, followingInProgress, follow, unfollow}: UsersPropsType) => {     
   
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return <div>   
        <div className={style.usersContant}>
            <div className={style.mainImageWrapper } style={mainImage}></div>          
        </div> 
        <Paginator totalItemsCount={usersTotalCount} pageSize={pageSize} currentPage={currentPage} onChangePage={onChangePage} portionSize={10}/>     
       <div className={style.users}>
       {users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} follow={follow} unfollow={unfollow}/> )}
       </div>
      
    </div>
}
)