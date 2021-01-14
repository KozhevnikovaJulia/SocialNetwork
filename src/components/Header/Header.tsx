import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faGlobeEurope} from '@fortawesome/free-solid-svg-icons'

export function Header(props: {login: string | null; isAuth: boolean; logout: any}) {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <a href="">
          <FontAwesomeIcon icon={faGlobeEurope} size="4x"/> 
          {/* <img src="https://www.clipartmax.com/png/full/342-3428376_vector-black-and-white-download-drawing-at-getdrawings-whisper-outline.png" */}
          {/* /> */}
          <span>Social Network</span>
        </a>
      </div>
      <div className={style.searchBur}>

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

