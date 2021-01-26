import React from "react"
import { reduxForm, Field } from "redux-form"
// import {required} from "../../util/Validator"
import {Input} from "../../../common/FormControl/FormControl"
// import {connect} from "react-redux"
// import {login} from "../../redux/AuthReducer"
// import { Redirect } from "react-router-dom"
import style from "../../../common/FormControl/FormControl.module.css"
import {ProfileType} from "../../../redux/ProfileReducer"

const ProfileDataForm = React.memo((props: any) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.loginForm} >
             <h1>About me</h1>
            <div><button >Save</button></div>
            <div>  <b>Fool name: </b><Field name="fullName" component={Input} type="text" placeholder={"Full name"} validate={[]} /></div>
             <div><b>Looking for a job: </b> <Field name="lookingForAJob" component={Input} type="checkbox" />Looking for a job</div>
            <div><b>My skills: </b><Field name="lookingForAJobDescription" component={Input} type="text" placeholder={"looking For A Job Description"} validate={[]} /></div>
        </form>
    )
}
)

  const ProfileDataReduxForm = reduxForm({
    form: 'profileData'
  })(ProfileDataForm)    


  export default  ProfileDataReduxForm

