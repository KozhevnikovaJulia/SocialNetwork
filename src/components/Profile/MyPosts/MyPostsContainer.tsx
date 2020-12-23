import { MyPosts } from './MyPosts';
import { addPost} from '../../../redux/ProfileReducer';
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
  return {
     posts: state.profilePage.posts,
     newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch: Function) => {
  return {
    addPost: (newPost: any) => {
      dispatch(addPost(newPost))
    }
  }
}

export const MyPostsContainer = connect (mapStateToProps,  mapDispatchToProps )(MyPosts) 

