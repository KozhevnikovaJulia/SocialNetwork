import React from 'react';
import { MyPosts } from './MyPosts';
import { addPost, changePost } from '../../../redux/ProfileReducer';
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
  return {
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Function) => {
  return {
    addPost: () => {
      dispatch(addPost())
    },

    changePost: (postMessage: string) => {
      dispatch(changePost(postMessage))
    }
  }
}

export const MyPostsContainer = connect (mapStateToProps,  mapDispatchToProps )(MyPosts) 

