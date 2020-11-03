import React from "react";
import style from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // store: any
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={style.profileContant}>
            <img src="https://sun9-72.userapi.com/c854024/v854024783/139230/wZlmqJc56E4.jpg" />
            <div className={style.ava}>
                <img src="https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                ava
            </div>
            <MyPostsContainer />
        </div>


    );
}