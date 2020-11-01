import React, { ChangeEvent } from "react";
import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator,changeMessageActionCreator} from "../../redux/Store";

type DialogsContainerPropsType = {
    // dialogs: Array<DialogArrayPropsType>
    // messages: Array<MessagesPropsType>
    // newMessageText: string
    // dispatch: (action: ActionTypes ) => void
    store: any

}

export function DialogsContainer(props:DialogsContainerPropsType) {
    let state = props.store.getState()
    const sendMessage = () => { props.store.dispatch(sendMessageActionCreator()) }
    const changeMessage = (messageText:string)=> {
        props.store.dispatch(changeMessageActionCreator(messageText))
    }
 
    return (
        <div >
           <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={props.store.newMessageText} sendMessage={sendMessage} changeMessage={changeMessage}/>
        </div>
);
}