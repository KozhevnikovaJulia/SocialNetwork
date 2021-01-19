import {dialogsReducer, sendMessageActionCreator, InitialStateType, DialogArrayType, MessagesType} from "./DialogsReducer"

let startState: InitialStateType

beforeEach(() => {
     startState = {
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
})

test("new message text should be correct", () => {
   const action = sendMessageActionCreator("Hi guys")
   const endState = dialogsReducer(startState, action)

   expect(endState.messages.length).toBe(4)
   expect(endState.messages[3].textMessage).toBe("Hi guys")
})

