import App from "../App";

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
            ]
        }
    },
    _callsubscriber() {
        console.log("State changed")
    },
    getState () {
        return this._state;
    },
    subscriber (observer:any) {
        this._callsubscriber = observer
    },

    addPost  () {
        let newPost = {id:5, message:this._state.profilePage.newPostText, likesCount:0};
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText= "";
        this._callsubscriber()
    },

    changePost  (postMessage:string) {
        this._state.profilePage.newPostText = postMessage;
        this._callsubscriber()
    }


}

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
type DialogsPagePropsType ={
    dialogs:Array<DialogArrayPropsType>
    messages: Array<MessagesPropsType>
}
export type StatePropsType = {
    profilePage:ProfilePagePropsType
    dialogsPage:DialogsPagePropsType
}
type StoreType = {
    _state:StatePropsType
    getState: () => void
    _callsubscriber:() => void
    addPost:() => void
    changePost:(postMessage:string) => void
    subscriber:(observer:any) => void
}

export default store;