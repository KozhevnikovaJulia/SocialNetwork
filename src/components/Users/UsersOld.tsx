import React, { ChangeEvent } from "react"
import style from "./Users.module.css"
import {UserType} from "../../redux/UsersReducer"
import Axios from "axios"
import userPhoto from "../../images/iconfinder_user_male2_172626.png"

type UsersPropsType = {
    users: Array<UserType>
    follow: (actionId: number)=> void
    unfollow: (actionId: number)=> void
    setUsers: (users: Array<UserType>)=> void
}
export const UsersOld = React.memo ((props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            Axios.get ("https://social-network.samuraijs.com/api/1.0/users"). then (response =>{
                props.setUsers (response.data.items)
            })       
        }
    }    
  
    return <div>
        <button onClick={getUsers}>Get users</button>
        {props.users.map(u => <div key={u.id} className={style.users} >
            <div className={style.userAvatar}>
                <div><img src={u.uniqueUrlName ? u.uniqueUrlName : userPhoto} /></div>
                <div>{u.followed ?
                    <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
                    <button onClick={() => { props.follow(u.id) }}>Follow</button>} </div>
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