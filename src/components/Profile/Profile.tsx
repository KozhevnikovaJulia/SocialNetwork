import React from "react";
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import { PostsPropsType } from "../../State/State";




type ProfilePropsType = {
    posts:Array<PostsPropsType>
    newPostText: string
    addPost:()=> void
    changePost:(postMessage:string)=>void
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={style.profileContant}>
            <img src="https://sun9-72.userapi.com/c854024/v854024783/139230/wZlmqJc56E4.jpg" />
            <div className={style.ava}>
                <img src="https://pbs.twimg.com/media/DyA2gApW0AE3IIK.jpg:large"/>
                ava
            </div>
            <MyPosts posts={props.posts} newPostText={props.newPostText} addPost={props.addPost} changePost={props.changePost}/>
        </div>


    );
}