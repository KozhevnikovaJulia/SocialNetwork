import React from "react"
import style from "../Profile.module.css"
import {ProfileType} from "../../../redux/ProfileReducer"
import {Contacts} from "./Contacts"

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  activateEditMode: ()=> void
}


export const ProfileData = React.memo((props: ProfileDataPropsType) => {
  const eee = ()=> {
    alert("hello")
  }

  debugger
  return (
    
    <div className={style.profileData}>
      {props.isOwner && <div><button onClick = {()=> eee}>Edit</button></div>}     

      <h1>About me</h1>
      <div>
        <b>Fool name: </b> {props.profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {props.profile.lookingForAJob}
      </div>
      <div>
        <b>My skills: </b> {props.profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Contacts: </b>

        {props.profile.contacts && Object.keys(props.profile.contacts).map(key => {

          return <Contacts key={key} contactTitle={key}
            contactValue={key}
          //    {props.profile.contacts[key]}
          />
        })}

      </div>
    </div>
  )
}
)


