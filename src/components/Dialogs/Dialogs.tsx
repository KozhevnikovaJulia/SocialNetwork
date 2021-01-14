import React from "react";
import style from "./Dialogs.module.css";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType, DialogArrayPropsType} from "../../redux/Store";
import {AddMessageReduxForm} from "../AddMessageForm/AddMessageForm";
import mainImg from "../../assets/image/pexels-jill-wellington-3969250.jpg"

type DialogsPropsType = {
    sendMessage: (newMessage: any)=> void
    changeMessage: (messageText:string)=> void
    newMessageText: string
    dialogs: Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>
}

export function Dialogs(props:DialogsPropsType) {
    let DialogElements = props.dialogs.map((dialog: DialogArrayPropsType) => {
        return <Dialog id={dialog.id} name={dialog.name} />
    })
    let MessageElements = props.messages.map((message: MessagesPropsType) => {
        return <Message textMessage={message.textMessage} id={message.id} />
    })

    const addMessage = (value: any) => {
        props.sendMessage(value.newMessage)
    }
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      };
    return (
        <div className={style.dialogsContant}>

            <div className={style.mainImageWrapper} style={mainImage}></div>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogs}>
                    {DialogElements}
                </div>
                <div className={style.messages}>
                    <div>{MessageElements}</div>
                    <AddMessageReduxForm onSubmit={addMessage} />
                </div>
            </div>

        </div>
)
}
