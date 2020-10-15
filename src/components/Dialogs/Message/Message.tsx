import React from "react";
import style from "./Message.module.css";
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    textMessage: string
    id:number
}
export function Message(props:MessagePropsType) {
    return (
        <div className={style.message}>
            {props.textMessage}
        </div>
    );
}