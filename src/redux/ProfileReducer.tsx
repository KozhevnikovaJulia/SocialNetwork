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
    
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: state.newPostText, likesCount: 0 }

            let stateCopy = { ...state }
            stateCopy.posts = [...state.posts]

            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }
         case CHANGE_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.postMessage
            return stateCopy
         }
    
        default: return state
    }
}
export const addPostActionCreator = (): ActionTypes  => ({type: "ADD-POST"})
export const changePostActionCreator = (postMessage: string): ActionTypes  => ({type: "CHANGE-POST", postMessage })