import React from "react";
import style from "./Profile.module.css";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "../Profile/ProfileInfo";
import {Redirect} from "react-router-dom";

type ProfilePropsType = {    
    profile: any
    isAuth: boolean   
}

export function Profile(props:ProfilePropsType) {     
    if (!props.isAuth) return  <Redirect to="/login" />
    return (       
        <div className={style.profileContant}>
            <ProfileInfo  profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
}