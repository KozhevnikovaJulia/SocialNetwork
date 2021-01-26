import React from "react"
import style from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog} from "@fortawesome/free-solid-svg-icons"
import { faPlayCircle} from "@fortawesome/free-solid-svg-icons"
import { faRss} from "@fortawesome/free-solid-svg-icons"
import { faCommentDots} from "@fortawesome/free-solid-svg-icons"
import { faUsers} from "@fortawesome/free-solid-svg-icons"
import { faAddressCard} from "@fortawesome/free-solid-svg-icons"


export const NavBar = React.memo (() => {
  return (
      <nav className={style.navBur}>
        <div className={style.item}>
          <NavLink to="/profile" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faAddressCard} size="1x" />Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faCommentDots} size="1x" />Dialogs</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faUsers} size="1x" />Users</NavLink>
        </div>        
        <div className={style.item}>
          <NavLink to="/music" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faPlayCircle} size="1x" />Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faRss} size="1x" />News</NavLink>
        </div>
        <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}>
          <FontAwesomeIcon className={style.icon} icon={faCog} size="1x" />Settings</NavLink>
      </div>
    </nav>
  )
}
)