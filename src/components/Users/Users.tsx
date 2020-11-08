import React, { ChangeEvent } from "react";
import style from "./Users.module.css";
import {UserType} from "../../redux/UsersReducer";
import Axios from "axios";
import userPhoto from "../../images/iconfinder_user_male2_172626.png";

type UsersPropsType = {
    users: Array<UserType>
    follow: (actionId: number)=> void
    unfollow: (actionId: number)=> void
    setUsers: (users: Array<UserType>)=> void
}
// [  { id: 1, avatarUserUrl:"https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Julia Kozhevnikova", status: "I am a student", location: {city: "Moscow", country: "Russia"} },
//     { id: 2, avatarUserUrl:"https://images.pexels.com/photos/792725/pexels-photo-792725.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: false, fullName: "Alisa Kozhevnikova", status: "I am a child", location: {city: "Moscow", country: "Russia"} },
//     { id: 3, avatarUserUrl:"https://images.pexels.com/photos/2182999/pexels-photo-2182999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Alina Kozhevnikova", status: "I am a child", location: {city: "Moscow", country: "Russia"} },
//     { id: 4, avatarUserUrl:"https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", followed: true, fullName: "Bob Bush", status: "I am a Bob", location: {city: "Moscow", country: "Russia"} },
// ]
export function Users(props: UsersPropsType) {
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