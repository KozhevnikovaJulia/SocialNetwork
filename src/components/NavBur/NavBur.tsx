import React from 'react';
import style from './NavBur.module.css';
import {NavLink} from "react-router-dom";


export function NavBur() {
  return (
      <nav className={style.navBur}>
        <div className={style.item}>
          <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news" activeClassName={style.active}>News</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
        </div>
      </nav>

  );
}
