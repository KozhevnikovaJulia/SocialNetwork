import React from "react";
import style from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "../Profile/ProfileInfo";

type ProfilePropsType = {    
    profile: any
    status: string
    updateStatus: (status: string) => void
}

export function Profile(props:ProfilePropsType) {     
    return (       
        <div className={style.profileContant}>
            <ProfileInfo  profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
}