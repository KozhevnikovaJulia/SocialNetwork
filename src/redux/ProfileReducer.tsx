import {StatePropsType, ActionTypes, ProfilePagePropsType} from "./State";

const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST"

export const profileReducer = (state: StatePropsType, action: ActionTypes) => {
    if (action.type === ADD_POST) {
        let newPost = { id: 5, message: state.newPostText, likesCount: 0 };
        state.posts.push(newPost);
        state.newPostText = "";
        
    } else if (action.type === CHANGE_POST) {
       state.newPostText = action.postMessage;
        
    } 

    return state;
}
