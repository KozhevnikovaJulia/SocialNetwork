import React from "react"
import style from "./Profile.module.css"
import {NavLink, useRouteMatch} from "react-router-dom"

export const ProfileBur = React.memo (() => {     
  let { path, url } = useRouteMatch();
    return (  
        <nav className={style.profileBur}>
        <div className={style.item}>
          <NavLink to={`${url}/myPosts`} activeClassName={style.active}>TimeLine</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to={`${url}/aboutMe`}activeClassName={style.active}>About</NavLink>
        </div>
    </nav>
      
    )
}
)
