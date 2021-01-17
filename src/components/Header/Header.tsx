import React from "react"
import style from "./Header.module.css"
import {NavLink} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeEurope} from "@fortawesome/free-solid-svg-icons"
import { faConnectdevelop} from "@fortawesome/free-brands-svg-icons"
import { faSearch} from "@fortawesome/free-solid-svg-icons"

export function Header(props: {login: string | null; isAuth: boolean; logout: any}) {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <a href="">
          <FontAwesomeIcon icon={faConnectdevelop} size="4x"/> 
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
        {props.isAuth
          ? <div>{props.login}  <button onClick={props.logout}>Logout</button> </div>
          : <NavLink to="/login" activeClassName={style.active}>Login</NavLink>
        }

      </div>

    </div>

  );
}

