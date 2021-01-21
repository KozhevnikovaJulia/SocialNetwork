import {ACTIONS_TYPE} from "./enumActionsType"

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

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SEND_MESSAGE: {
            let bodyMessage = action.newMessage
            return {
                ...state,
                messages: [...state.messages, {id:6, textMessage:bodyMessage}]
            }
        }         
    
        default: return state
    }    
}
export const sendMessageActionCreator = (newMessage: any) => ({type: ACTIONS_TYPE.SEND_MESSAGE, newMessage} as const)

//types
type ActionsType = ReturnType<typeof sendMessageActionCreator> 

export type InitialStateType = typeof initialState

export type MessagesType = {
    id: number
    textMessage: string
}

export type DialogArrayType = {
    id: number
    name: string
}