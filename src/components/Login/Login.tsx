import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required} from "../../util/Validator";
import {Input} from "../../common/FormControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import { Redirect } from "react-router-dom";
import style from "../../common/FormControl/FormControl.module.css"


export function LoginForm(props: any) {
  return (
    <form onSubmit={props.handleSubmit} className = {style.loginForm} >
      <div> <Field name="email" component={Input} type="text"  placeholder={"Email"} validate={[required ]}/></div>      
      <div><Field name="password" component={Input} type="password"  placeholder={"Password"} validate={[required ]}/></div>
      <div><Field name="rememberMe" component={Input} type="checkbox" />Remember me</div> 

      {props.error && <div className = {style.formSummeryError}>{props.error}</div>} 

      <div><button >Login</button></div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

function Login(props: any) {
  const onSubmit = (formData: any)=> {
props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect  to = {"/profile"}/>
  }
  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit ={onSubmit}/>
  </>
}

let mapStateToProps = (state: any) => {
  return {
      isAuth: state.auth.isAuth
  }
}

export default  connect (mapStateToProps, {login}) (Login)