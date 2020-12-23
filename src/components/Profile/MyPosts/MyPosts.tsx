import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsPropsType} from '../../../redux/Store';
import {AddPostReduxForm } from "../../AddPostForm/AddPostForm";

type MyPostsPropsType = {
 addPost: (newPost: any)=> void
 posts: Array<PostsPropsType>
 newPostText: string
}

export function MyPosts(props:MyPostsPropsType  ) {  
  let PostElements = props.posts.map ((post:PostsPropsType) => 
  <Post message={post.message} likesCount={post.likesCount} id={post.id} />)

  const addPost = (value: any)=> {
    props.addPost(value.newPost)
      }

  return (
    <div className={style.myPosts}>
      <h1>My posts</h1>
      <AddPostReduxForm  onSubmit ={addPost}/>     
      <div className={style.posts}>
        {PostElements}

      </div>
    </div>

  );
}

