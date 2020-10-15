import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './Post/Post';
import { PostsPropsType } from '../../../State/State';


type MyPostsPropsType = {
  posts:Array<PostsPropsType>
  newPostText: string
  addPost:()=>void
  changePost:(postMessage:string)=>void
}

export function MyPosts(props:MyPostsPropsType  ) {

  let PostElements = props.posts.map ((post:PostsPropsType) => <Post message={post.message} likesCount={post.likesCount} id={post.id} />
  )

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
        props.addPost();
         }

    let changePost = () =>{
        if (newPostElement.current){
            let postMessage = newPostElement?.current.value;
        props.changePost(postMessage)
    }

  }
  return (
  <div className={style.myPosts}>
    <h1>My posts</h1>
    <div>
      <textarea onChange={ changePost } ref={newPostElement} value={props.newPostText}></textarea>
      <button onClick={ addPost }>Add post</button>
    </div>
   <div className={style.posts}>
     {PostElements}

   </div>


  </div>

  );
}

