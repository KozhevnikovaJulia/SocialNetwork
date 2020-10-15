import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType, DialogArrayPropsType} from "../../State/State";

type DialogsPropsType = {
    dialogs: Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>

}

export function Dialogs(props:DialogsPropsType) {

    let DialogElements = props.dialogs.map ((dialog:DialogArrayPropsType) =>{
        return <Dialog id={dialog.id} name={dialog.name}  />
    })
    let MessageElements = props.messages.map ((message: MessagesPropsType) =>{
        return <Message textMessage={message.textMessage} id={message.id} />
    })
    return (
        <div className={style.dialogsContant}>
            <div className={style.dialogs}>
                {DialogElements}
            </div>
            <div className={style.messages}>
                {MessageElements}
            </div>
        </div>



);
}