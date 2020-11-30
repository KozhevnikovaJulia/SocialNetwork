import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


export function Header(props: {id: number | null, email: string | null, login: string | null}) {
  return (
    <div >
      <img src="https://www.clipartmax.com/png/full/342-3428376_vector-black-and-white-download-drawing-at-getdrawings-whisper-outline.png" />
      <div className={style.loginBlock}>
        <NavLink to="/login" activeClassName={style.active}>Login</NavLink>
      </div>
  </div>

  );
}

