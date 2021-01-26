import React from "react"
import style from "../Profile.module.css"
import userProfilePhoto from "../../../assets/image/darkBlueSpider.png"
import {ProfileType} from "../../../redux/ProfileReducer"
import {ProfileStatusWithUseState} from "../ProfileInfo/ProfileStatusWithUseState"


type ProfileAvaPropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string)=> void
  savePhoto: (file: any) => void
  isOwner: boolean

}

export const ProfileAva = React.memo((props: ProfileAvaPropsType) => {
    const mainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files != null) {
          props.savePhoto(e.target.files[0])
        }
      }
    return <div className={style.ava}>
        {props.profile.photos != null &&
            <img src={props.profile.photos.large || userProfilePhoto} />
        }
        {props.isOwner && <input onChange={mainPhotoSelected} type="file" />}
        <ProfileStatusWithUseState status={props.status} updateStatus={props.updateStatus} />
    </div>

}
)