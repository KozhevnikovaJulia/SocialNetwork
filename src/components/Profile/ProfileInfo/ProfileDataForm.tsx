import React from "react"
import { reduxForm, Field } from "redux-form"
import {Input} from "../../../common/FormControl/FormControl"
import style from "../../../common/FormControl/FormControl.module.css"

type ProfileDataFormPropsType = {
  handleSubmit: any
  initialValues: any
  error: string
}

const ProfileDataForm = React.memo((props: ProfileDataFormPropsType) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.profileForm} >
      <div><button >Save</button></div>
      {props.error && <div  className={style.formSummeryError}>{props.error}</div>}
      <h1>About me</h1>
      <div>  <b>Full name: </b><Field name="fullName" component={Input} type="text" placeholder={"Full name"} /></div>
      <div><b>Looking for a job: </b> <Field name="lookingForAJob" component={Input} type="checkbox" />Looking for a job</div>
      <div><b>My skills: </b><Field name="lookingForAJobDescription" component={Input} type="text" placeholder={"looking For A Job Description"} /></div>
      <div><b>About me: </b><Field name="aboutMe" component={Input} type="text" placeholder={"About me"} /></div>
      <div><b>Contacts: </b> {Object.keys(props.initialValues.contacts).map(key => {

        return <div key={key}>
          <b>{key} : <Field name={"contacts." + "" + key} component={Input} type="text" placeholder={key} /></b>
        </div>
      })}
      </div>
     
    </form>
  )
}
)

  const ProfileDataReduxForm = reduxForm({
    form: 'profileDataForm'
  })(ProfileDataForm)    


  export default  ProfileDataReduxForm

