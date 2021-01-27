import React,  {useState}  from "react"
import style from "../Profile.module.css"
import {Preloader} from "../../../common/Preloader/Preloader"
import {ProfileData} from "./ProfileData"
import {ProfileType} from "../../../redux/ProfileReducer"
import ProfileDataForm from "./ProfileDataForm"

type ProfileInfoPropsType = {
  profile: ProfileType
  isOwner: boolean
  saveProfile:(formData: any)=> void
  
}

export const ProfileInfo = React.memo((props: ProfileInfoPropsType) => {
  if (!props.profile) { return <Preloader /> }

  let [editMode, setEditMode] = useState<boolean>(false)

  const onSubmit = (formData: any)=> {
    console.log(formData)
    props.saveProfile(formData)
  }
  return (
    <div>

      {editMode ? <ProfileDataForm  initialValues ={props.profile} onSubmit={onSubmit}/>
                :  <ProfileData profile={props.profile}
                               isOwner={props.isOwner}
                               activateEditMode={()=> {setEditMode(true)}}/> }   
      
    </div>
  )
}
)