import React from "react";
import {ProfileAPIContainer} from "./ProfileAPIContainer";
import {addPost, changePost, setUserProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText          
    }
}

export const ProfileContainer = connect (mapStateToProps,
    { addPost, changePost, setUserProfile } 
      )
     (ProfileAPIContainer)


   