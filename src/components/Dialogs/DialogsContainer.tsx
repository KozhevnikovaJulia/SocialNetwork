import React from "react";
import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
        sendMessage: (newMessage: any) => {
            dispatch(sendMessageActionCreator(newMessage))
        },       
    }
}

export default compose <React.ComponentType>(
    connect (mapStateToProps,mapDispatchToProps ),    
    withAuthRedirect 
 )(Dialogs)
