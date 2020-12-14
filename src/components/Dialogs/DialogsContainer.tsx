import React, { ChangeEvent } from "react";
import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator,changeMessageActionCreator} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.newMessageText,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent =  withAuthRedirect(Dialogs)

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps )(AuthRedirectComponent)