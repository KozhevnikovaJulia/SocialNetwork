import React, { ChangeEvent } from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {MessagesPropsType, DialogArrayPropsType,ActionTypes, sendMessageActionCreator,changeMessageActionCreator} from "../../redux/Store";

type DialogsPropsType = {
    dialogs: Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>
    newMessageText: string
    dispatch: (action: ActionTypes ) => void

}

export function Dialogs(props:DialogsPropsType) {

    let DialogElements = props.dialogs.map ((dialog:DialogArrayPropsType) =>{
        return <Dialog id={dialog.id} name={dialog.name}  />
    })
    let MessageElements = props.messages.map ((message: MessagesPropsType) =>{
        return <Message textMessage={message.textMessage} id={message.id} />
    })
    
    const sendMessage = () => { props.dispatch(sendMessageActionCreator()) }
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageText = e.currentTarget.value;
        props.dispatch(changeMessageActionCreator(messageText))
    }
 // let newMessageElement = React.createRef<HTMLTextAreaElement>();
    // const changeMessage = () => {
    //     if (newMessageElement.current){
    //     let messageText = newMessageElement.current?.value;
    // props.dispatch(changeMessageActionCreator(messageText))}
    // }
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