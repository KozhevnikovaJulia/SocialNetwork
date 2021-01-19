import React from "react"
import style from "./Users.module.css"
import { UserType } from "../../redux/UsersReducer"
import userPhoto from "../../assets/image/iconfinder_user_male4_172628.png"
import { NavLink } from "react-router-dom"
import mainImg from "../../assets/image/pexels-kim-van-vuuren-1590159.jpg"
import {Paginator} from "./Paginator"

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
        <Paginator usersTotalCount={usersTotalCount} pageSize={pageSize} currentPage={currentPage} onChangePage={onChangePage}/>     
       
        {users.map(u => <div key={u.id} className={style.users} >
            <div className={style.userAvatar}>
                <NavLink to= {"/profile/" + u.id}>
                  
                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} />
                </NavLink>
               
                <div>{u.followed
                 ?  <button  disabled={followingInProgress.some(id=>id ===u.id)}
                             onClick={() => { unfollow(u.id) }}>Unfollow</button>
                 :  <button  disabled={followingInProgress.some(id=>id ===u.id)}
                             onClick={() => { follow(u.id) }}>Follow</button>} </div>
            </div>
            <div className={style.userInfo}>
                <h3>{u.name}</h3>
                <div className={style.city}>{"u.location.city"}</div>
                <div className={style.country}>{"u.location.country"}</div>
                <div>{u.status}</div>
            </div>
        </div>

        )
        }
    </div>
}
)