import React from "react"
import style from "./Users.module.css"
import { NavLink } from "react-router-dom"
import userPhoto from "../../assets/image/Голубой Круг Бизнес Логотип (3).png"
import { UserType } from "../../redux/UsersReducer"
import mainImg from "../../assets/image/666.jpg"

type UserPropsType = {
    user: UserType 
    followingInProgress: Array<number> 
    follow:(userId: number)=> void
    unfollow: (userId: number)=> void 
}

export const User = React.memo(({ user, followingInProgress, follow, unfollow }:UserPropsType) => {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
   
    return <div className={style.user} style={mainImage} >

        <div className={style.userAvatar}>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} />
            </NavLink>
            <div>{user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { unfollow(user.id) }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
        </div>
        <div className={style.userInfo}>
            <h3>{user.name}</h3>
            <div className={style.city}>{user.status}</div>
            <div>{user.status}</div>
        </div>        
    </div>
}
)