import React from "react"
import style from "./Profile.module.css"
import {Preloader} from "../../common/Preloader/Preloader"
import {ProfileStatusWithUseState} from "./ProfileStatusWithUseState"
import mainImg from "../../assets/image/pexels-moose-photos-1037995.jpg"
import userProfilePhoto from "../../assets/image/darkBlueSpider.png"

type ProfileInfoPropsType = {
  profile: any
  status: string
  updateStatus: (status: string)=> void
  
}

export const ProfileInfo = React.memo ((props: ProfileInfoPropsType) => {
  if(!props.profile){
    return <Preloader/>}

    const mainImage= {
      backgroundImage: `url(${mainImg })`
    };
  return (   
        <div >
       <div className={style.mainImageWrapper} style={mainImage}></div>
      <div className={style.ava}>
        <img src={props.profile.photos.large ? props.profile.photos.large : userProfilePhoto} />
        <ProfileStatusWithUseState status = {props.status} updateStatus={props.updateStatus}/>
      </div>
        </div>      
  )
}
)
