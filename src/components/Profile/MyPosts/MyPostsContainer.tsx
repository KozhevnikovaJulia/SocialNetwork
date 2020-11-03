import React from 'react';
import { MyPosts } from './MyPosts';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/ProfileReducer';
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
      dispatch(addPostActionCreator())
    },

    changePost: (postMessage: string) => {
      dispatch(changePostActionCreator(postMessage))
    }
  }
}

export const MyPostsContainer = connect (mapStateToProps,  mapDispatchToProps )(MyPosts) 

