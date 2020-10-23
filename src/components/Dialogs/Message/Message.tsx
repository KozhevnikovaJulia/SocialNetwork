import React from "react";
import style from "./Message.module.css";
import {NavLink} from "react-router-dom";

type MessagePropsType = {
    textMessage: string
    id:number
}
export function Message(props:MessagePropsType) {
    return (
        <div className={style.message}>
            {props.textMessage}
        </div>
    );
}

// export function MyPosts(props:MyPostsPropsType  ) {

//     let PostElements = props.posts.map ((post:PostsPropsType) => <Post message={post.message} likesCount={post.likesCount} id={post.id} />
//     )
  
//     let newPostElement = React.createRef<HTMLTextAreaElement>();
  
//     let addPost = () => {
//           props.dispatch (addPostActionCreator());
//            }
  
//       let changePost = () =>{
//           if (newPostElement.current){
//               let postMessage = newPostElement?.current.value;
//               props.dispatch (changePostActionCreator (postMessage))
//              }
  
//     }
//     return (
//     <div className={style.myPosts}>
//       <h1>My posts</h1>
//       <div>
//         <textarea onChange={ changePost } ref={newPostElement} value={props.newPostText}></textarea>
//         <button onClick={ addPost }>Add post</button>
//       </div>
//      <div className={style.posts}>
//        {PostElements}
  
//      </div>
  
  
//     </div>
  
//     );
//   }