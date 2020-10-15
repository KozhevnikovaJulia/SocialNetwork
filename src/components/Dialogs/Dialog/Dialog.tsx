import React from "react";
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name:string
    id:number
}
export function Dialog(props:DialogPropsType ) {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>

    );
}