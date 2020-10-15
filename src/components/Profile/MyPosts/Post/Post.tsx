import React from 'react';
import style from "./Post.module.css";

type PostPropsType = {
    message:string
    likesCount: number
    id: number
}

export function Post(props: PostPropsType) {
  return (
      <div className={style.post}>
        <img src="https://pbs.twimg.com/media/ECfnBGCXoAAAIRM.jpg:large"/>
        {props.message}
        <div>
          <span>Like</span> {props.likesCount}
        </div>

      </div>

  );
}

