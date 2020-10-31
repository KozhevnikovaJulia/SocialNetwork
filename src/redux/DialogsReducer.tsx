const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

export type ActionTypes = AddPostActionType | ChangePostActionType | SendMessageActionType | ChangeMessageActionType
type AddPostActionType = {
type:"ADD-POST"
}
type ChangePostActionType = {
    type:"CHANGE-POST"
    postMessage: string
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
type ChangeMessageActionType = {
    type: "CHANGE-MESSAGE"
    messageText: string
}

type MessagesType = {
    id: number
    textMessage: string
}

type DialogArrayType = {
    id: number
    name: string
}
// type InitialStateType = {
//     dialogs:Array<DialogArrayPropsType>
//     messages: Array<MessagesPropsType>
//     newMessageText: string
// }
type InitialStateType = typeof initialState

let initialState  = {
    dialogs: [
        { id: 1, name: "Ann" },
        { id: 2, name: "Andy" },
        { id: 3, name: "Mike" }
    ] as Array<DialogArrayType>,
    messages: [
        { id: 1, textMessage: "Hi" },
        { id: 2, textMessage: "Hello" },
        { id: 3, textMessage: "How are you" }
    ] as Array<MessagesType>,
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = { id: 6, textMessage: state.newMessageText };
        state.messages.push(newMessage);
        state.newMessageText = "";

    } else if (action.type === CHANGE_MESSAGE) {
        state.newMessageText = action.messageText;
    }

    return state;
}
