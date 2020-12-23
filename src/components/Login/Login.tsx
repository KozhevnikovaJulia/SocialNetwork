import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required} from "../../util/Validator";
import {Input} from "../../common/FormControl/FormControl";



export function LoginForm(props: any) {
  return (
    <form onSubmit={props.handleSubmit} >
      <div> <Field name="login" component={Input} type="text"  placeholder={"Login"} validate={[required ]}/></div>      
      <div><Field name="password" component={Input} type="text"  placeholder={"Password"} validate={[required ]}/></div>
      <div><Field name="rememberMe" component={Input} type="checkbox" />Remember me</div>    
      <div><button>Login</button></div>
    </form>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export function Login(props: any) {
  const onSubmit = (formData: any)=> {
console.log(formData)
  }
  return <>
    <h1>Login</h1>
    <LoginReduxForm onSubmit ={onSubmit}/>
  </>
}