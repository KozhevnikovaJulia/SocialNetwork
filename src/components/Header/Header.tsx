import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


export function Header(props: {login: string | null; isAuth: boolean; logout: any}) {
  return (
    <div >
      <img src= "https://www.clipartmax.com/png/full/342-3428376_vector-black-and-white-download-drawing-at-getdrawings-whisper-outline.png" 
      />
      <div className={style.loginBlock}>
        {props.isAuth 
        ? <div>{props.login}  <button onClick = {props.logout}>Logout</button> </div>  
        : <NavLink to="/login" activeClassName={style.active}>Login</NavLink>
        }
      </div>
  </div>

  );
}

