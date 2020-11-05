import React, { ChangeEvent } from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/UsersReducer";

type UsersPropsType = {
    users: Array<UserType>
    follow: (actionId: number)=> void
    unfollow: (actionId: number)=> void
}

export function Users(props: UsersPropsType) {
    return <div>
        {props.users.map(u => <div key={u.id} className={style.users} >
                <div className={style.userAvatar}>
                    <div><img src={u.avatarUserUrl} /></div>
                    <div>{u.followed ?
                        <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>} </div>
                </div>
                <div className={style.userInfo}>
                    <h3>{u.fullName}</h3>
                    <div className={style.city}>{u.location.city}</div>
                    <div className={style.country}>{u.location.country}</div>
                    <div>{u.status}</div>
                </div>
            </div>
        
        )
                    }
    </div>
}