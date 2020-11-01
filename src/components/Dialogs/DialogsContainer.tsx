import React, { ChangeEvent } from "react";
import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator,changeMessageActionCreator} from "../../redux/Store";
import {connect} from "react-redux"

// type DialogsContainerPropsType = {
//         // store: any
// }

// export function DialogsContainer(props:DialogsContainerPropsType) {
//     let state = props.store.getState()
//     const sendMessage = () => { props.store.dispatch(sendMessageActionCreator()) }
//     const changeMessage = (messageText:string)=> {
//         props.store.dispatch(changeMessageActionCreator(messageText))
//     }
 
//     return (
//         <div >
//            <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessageText={props.store.newMessageText} sendMessage={sendMessage} changeMessage={changeMessage}/>
//         </div>
// );
// }
let mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Function) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        changeMessage:  (messageText: string) => {
            dispatch(changeMessageActionCreator(messageText))
        }
    }
}
export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps )(Dialogs)