import React from "react"
import style from "./Header.module.css"
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faConnectdevelop} from "@fortawesome/free-brands-svg-icons"
import { faSearch} from "@fortawesome/free-solid-svg-icons"
import logo from "../../assets/image/Голубой Круг Бизнес Логотип (5).png"
import { profile } from "console"
import userPhoto from "../../assets/image/Голубой Круг Бизнес Логотип (3).png"

export const Header = React.memo ((props: {login: string | null; isAuth: boolean; logout: any; profile: any}) => {
    return (
    <div className={style.header}>
      <div className={style.logo}>
        <a href="">
        <img src={logo} />
          <span>Social Network</span>
        </a>
      </div>

      <div className={style.searchBur}>
        <form  action="" className={style.searchForm}>
          <input type="text" placeholder={"Type here to search..."} className={style.searchInput} />
          <a href="">
          <FontAwesomeIcon icon={faSearch} size="1x"/> 
          </a>
        </form>
        </div>

        <div className={style.loginBlock}>
          {props.profile.photos != null &&
            <img src={props.profile.photos.small || userPhoto} />
          }

        {props.isAuth
          ? <div>{props.login}  <button onClick={props.logout}>Logout</button> </div>
          : <NavLink to="/login" activeClassName={style.active}>Login</NavLink>
        }
      </div>
    </div>
  )}
)
