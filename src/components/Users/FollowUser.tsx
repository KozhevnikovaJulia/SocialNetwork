import React from "react"
import style from "./Users.module.css"
import { NavLink } from "react-router-dom"
import userPhoto from "../../assets/image/iconfinder_user_male4_172628.png"
import { UserType } from "../../redux/UsersReducer"

type FollowUserPropsType = {
    user: UserType 
    followingInProgress: Array<number> 
    follow:(userId: number)=> void
    unfollow: (userId: number)=> void 
}

export const FollowUser = React.memo(({ user, followingInProgress, follow, unfollow }:FollowUserPropsType) => {

    return <div  className={style.users} >
        <div className={style.userAvatar}>
            <NavLink to={"/profile/" + user.id}>

                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
            </NavLink>

            <div>{user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>Follow</button>} </div>
        </div>
        <div className={style.userInfo}>
            <h3>{user.name}</h3>
            <div className={style.city}>{"u.location.city"}</div>
            <div className={style.country}>{"u.location.country"}</div>
            <div>{user.status}</div>
        </div>
    </div>
}
)