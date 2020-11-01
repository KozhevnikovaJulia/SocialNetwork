import React from "react";
import style from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

export function Profile(props:ProfilePropsType) {
    return (
        <div className={style.profileContant}>
            <img src="https://sun9-72.userapi.com/c854024/v854024783/139230/wZlmqJc56E4.jpg" />
            <div className={style.ava}>
                <img src="https://pbs.twimg.com/media/DyA2gApW0AE3IIK.jpg:large"/>
                ava
            </div>
            <MyPostsContainer store={props.store} />
        </div>


    );
}