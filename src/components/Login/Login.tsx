import React from 'react';
import { reduxForm, Field } from 'redux-form'



export function LoginForm(props: any) {
  return (
    <form onSubmit={props.handleSubmit} >
      <div> <Field name="login" component="input" type="text"  placeholder={"Login"}/></div>      
      <div><Field name="password" component="input" type="text"  placeholder={"Password"}/></div>
      <div><Field name="rememberMe" component="input" type="checkbox" />Remember me</div>    
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