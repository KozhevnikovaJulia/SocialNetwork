const SEND_MESSAGE = "SEND-MESSAGE"

export type ActionTypes = AddPostActionType | ChangePostActionType | SendMessageActionType 

type AddPostActionType = {
type:"ADD-POST"
}
type ChangePostActionType = {
    type:"CHANGE-POST"
    postMessage: string
}
type SendMessageActionType = {
    type: "SEND-MESSAGE"
    newMessage: any
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
    ] as Array<MessagesType>  
}

export const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let bodyMessage = action.newMessage
            return {
                ...state,
                messages: [...state.messages, {id:6, textMessage:bodyMessage}]
            }
        }         
    
        default: return state
    }
    
}
export const sendMessageActionCreator = (newMessage: any): ActionTypes  => ({type: "SEND-MESSAGE", newMessage})
