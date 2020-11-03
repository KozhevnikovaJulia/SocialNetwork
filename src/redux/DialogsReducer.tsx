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
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = { id: 6, textMessage: state.newMessageText }

            let stateCopy = { ...state,
            messages: [...state.messages] }
            
        stateCopy.messages.push(newMessage)
        stateCopy.newMessageText = ""
            return stateCopy
        }
         case CHANGE_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.messageText
            return stateCopy
         }
    
        default: return state
    }
    
}
export const sendMessageActionCreator = (): ActionTypes  => ({type: "SEND-MESSAGE"})
export const changeMessageActionCreator = (messageText: string): ActionTypes  => ({type: "CHANGE-MESSAGE", messageText })