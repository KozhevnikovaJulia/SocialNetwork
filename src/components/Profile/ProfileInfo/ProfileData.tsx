import React from "react"
import style from "../Profile.module.css"
import {ContactsType, ProfileType} from "../../../redux/ProfileReducer"
import {Contacts} from "./Contacts"


type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  activateEditMode: ()=> void
}


export const ProfileData = React.memo((props: ProfileDataPropsType) => {
 
  return (
    
    <div className={style.profileData}>
      {props.isOwner && <div><button onClick = {props.activateEditMode}>Edit</button></div>}     

      <h1>About me</h1>
      <div>
        <b>Full name: </b> {props.profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob}
      </div>
      <div>
        <b>My skills: </b> {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>About me: </b> {props.profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>

        {props.profile.contacts && Object.keys(props.profile.contacts).map(key => {

          return <Contacts key={key} contactTitle={key}
            contactValue= {props.profile.contacts[key as keyof ContactsType]}
          />
        })}

      </div>
    </div>
  )
}
)


