import React from 'react';
import { MyPosts } from './MyPosts';
import { addPostActionCreator, changePostActionCreator } from '../../../redux/Store';
import {connect} from "react-redux";

// type MyPostsContainerPropsType = {
// //  store: any
// }

// export function MyPostsContainer(props: MyPostsContainerPropsType) {
  
//   let state = props.store.getState()

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let changePost = (postMessage: string) => {
//       props.store.dispatch(changePostActionCreator(postMessage))
//     }
 
//   return <MyPosts addPost={addPost}
//                   changePost={changePost}
//                   posts={state.profilePage.posts}
//                   newPostText={state.profilePage.newPostText}/>
// }
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

