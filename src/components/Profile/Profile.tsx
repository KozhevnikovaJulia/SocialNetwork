import React from "react";
import style from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "../Profile/ProfileInfo"

type ProfilePropsType = {
    // posts: Array<PostsType>
    // newPostText: string
    profile: any
    setUserProfile: (profile: any) => void
}

export function Profile(props:ProfilePropsType) {      
    return (       
        <div className={style.profileContant}>
            <ProfileInfo  profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}