import React from "react";
import style from "./Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import mainImg from "../../images/hans-peter-gauster-3y1zF4hIPCg-unsplash (1).jpg"

type ProfileInfoPropsType = {
  profile: any
  
}


export function ProfileInfo(props: ProfileInfoPropsType) {
  if(!props.profile){
    return <Preloader/>}
  return (   
        <div >
       {/* <img src={mainImg}/>       */}
      <div className={style.ava}>
        <img src={props.profile.photos.large} />
        <ProfileStatus status = "OK" />
      </div>
        </div>      
  )
}

