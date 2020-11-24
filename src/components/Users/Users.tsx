import React, { ChangeEvent } from "react";
import style from "./Users.module.css";
import { UserType } from "../../redux/UsersReducer";
import userPhoto from "../../images/iconfinder_user_male4_172628.png";
import { NavLink } from "react-router-dom";


type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    usersTotalCount: number
    currentPage: number
    follow: (actionId: number) => void
    unfollow: (actionId: number) => void
    onChangePage: (pageNumber: number)=> void
}
// declare interface Math {
//     ceil(x: number): number;
// }

export function Users(props: UsersPropsType) {   
   
    let pageCount: number = Math.ceil(props.usersTotalCount / props.pageSize) // Math.сeil округляет число в большую сторону
    let pages: Array<number> = []
    let i: number
    for (i = 1; i <= pageCount; i++) {
        pages.push(i)
    }  
 
    return <div>         
        {pages.map(p => {
            const currentPageClass = props.currentPage === p ? style.selectedPage : "";
            return <span className={currentPageClass}
                onClick={() => { props.onChangePage(p) }}>{p}</span>
        })
        }
        {props.users.map(u => <div key={u.id} className={style.users} >
            <div className={style.userAvatar}>
                <NavLink to= {"/profile/" + u.id}>
                    {/* <img src={u.uniqueUrlName ? u.uniqueUrlName : userPhoto} /> */}
                    <img src={u.photos.small !=null ? u.photos.small : userPhoto} />
                </NavLink>
               
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
