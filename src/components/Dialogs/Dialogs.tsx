import React, { ChangeEvent } from "react";
import style from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType, DialogArrayPropsType,ActionTypes, sendMessageActionCreator,changeMessageActionCreator} from "../../redux/Store";

type DialogsPropsType = {
    sendMessage: ()=> void
    changeMessage: (messageText:string)=> void
    newMessageText: string
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
    
    const sendMessage = props.sendMessage
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value
        props.changeMessage(messageText)        
    }

    return (
        <div className={style.dialogsContant}>
            <div className={style.dialogs}>
                {DialogElements}
            </div>
            <div className={style.messages}>
                <div>{MessageElements}</div>
                <div>
                    <div><textarea value={props.newMessageText} onChange={changeMessage } placeholder="Enter your message"></textarea>  </div>
                    <div><button onClick={sendMessage}>Send message</button></div>
                </div>
            </div>
        </div>



);
}