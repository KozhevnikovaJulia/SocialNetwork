import React from "react"
import style from "./FollowUser.module.css"
import { NavLink } from "react-router-dom"
import userPhoto from "../../../assets/image/Голубой Круг Бизнес Логотип (3).png"
import { UserType } from "../../../redux/UsersReducer"

type FollowUserPropsType = {
    user: UserType 
    followingInProgress: Array<number> 
    follow:(userId: number)=> void
    unfollow: (userId: number)=> void 
}

export const FollowUser = React.memo(({ user, followingInProgress, follow, unfollow }: FollowUserPropsType) => {

    return <div className={style.followUser}>
        <div className={style.followUserAvatar}>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
            </NavLink>
        </div>

        <div className={style.followUserBody}>
            {user.name}
            <div>{user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>Follow</button>} </div>
        </div>

    </div>

}
)