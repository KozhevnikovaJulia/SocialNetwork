import App from "../App";

const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"
const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-MESSAGE"

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "It is my first post", likesCount: 0},
                {id: 2, message: "Hi", likesCount: 4},
                {id: 3, message: "Hello", likesCount: 5}
            ],
            newPostText: "OK"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ann"},
                {id: 2, name: "Andy"},
                {id: 3, name: "Mike"}
            ],
            messages: [
                {id: 1, textMessage: "Hi"},
                {id: 2, textMessage: "Hello"},
                {id: 3, textMessage: "How are you"}
            ],
            newMessageText: ""
        }
    },
    _callsubscriber() { console.log("State changed") },

    getState () { return this._state },

    subscriber (observer:any) { this._callsubscriber = observer },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = { id: 5, message: this._state.profilePage.newPostText, likesCount: 0 };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callsubscriber()
        } else if (action.type === CHANGE_POST) {
            this._state.profilePage.newPostText = action.postMessage;
            this._callsubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = { id: 6, textMessage: this._state.dialogsPage.newMessageText };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callsubscriber()
        } else if (action.type === CHANGE_MESSAGE){
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callsubscriber()
        }
    },

}


export const addPostActionCreator = (): ActionTypes  => ({type: "ADD-POST"})
export const changePostActionCreator = (postMessage: string): ActionTypes  => ({type: "CHANGE-POST", postMessage })
export const sendMessageActionCreator = (): ActionTypes  => ({type: "SEND-MESSAGE"})
export const changeMessageActionCreator = (messageText: string): ActionTypes  => ({type: "CHANGE-MESSAGE", messageText })
export type MessagesPropsType = {
    id: number
    textMessage: string
}
export type DialogArrayPropsType = {
    id: number
    name: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePagePropsType ={
    posts: Array<PostsPropsType>
    newPostText: string
}
export type DialogsPagePropsType ={
    dialogs:Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>
    newMessageText: string
}
export type StatePropsType = {
    profilePage:ProfilePagePropsType
    dialogsPage:DialogsPagePropsType
}
type StoreType = {
    _state:StatePropsType
    getState: () => StatePropsType
    _callsubscriber:() => void
    // addPost:() => void
    // changePost:(postMessage:string) => void
    subscriber:(observer:()=> void) => void
    dispatch: (action: ActionTypes ) => void
}
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
export default store;