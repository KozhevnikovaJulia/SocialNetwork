const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"

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

export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

type InitialStateType = typeof initialState

let initialState = {
    posts: [
        { id: 1, message: "It is my first post", likesCount: 0 },
        { id: 2, message: "Hi", likesCount: 4 },
        { id: 3, message: "Hello", likesCount: 5 }
    ] as Array<PostsPropsType>,
    newPostText: "OK"
}

export const profileReducer = (state= initialState, action: ActionTypes): InitialStateType => {
    if (action.type === ADD_POST) {
        let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
        state.posts.push(newPost);
        state.newPostText = "";
        
    } else if (action.type === CHANGE_POST) {
       state.newPostText = action.postMessage;
        
    } 

    return state;
}
