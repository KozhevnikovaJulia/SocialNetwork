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
                    <div>{u.fullName}{u.location.city}{u.location.country}</div>
                    <div>{u.status}</div>
                </div>
            </div>
        
        )
                    }
    </div>
}