import React from "react"
import { reduxForm, Field, InjectedFormProps } from "redux-form"
import {required} from "../../util/Validator"
import {Input} from "../../common/FormControl/FormControl"
import {connect} from "react-redux"
import {getCaptchaUrl, login} from "../../redux/AuthReducer"
import { Redirect } from "react-router-dom"
import style from "../../common/FormControl/FormControl.module.css"



const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={style.form} >
      <div> <Field name="email" component={Input} type="text" placeholder={"Email"} validate={[required]} /></div>
      <div><Field name="password" component={Input} type="password" placeholder={"Password"} validate={[required]} /></div>
      <div><Field name="rememberMe" component={Input} type="checkbox" className={style.loginCheckBox}/>Remember me</div>

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&  <div> <Field name="captcha" component={Input} type="text" placeholder={"Symbols from image"} validate={[required]} /></div>}

      {error && <div className={style.formSummeryError}>{error}</div>}

      <div><button >Login</button></div>
    </form>
  )
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
  form: 'login'
})(LoginForm)

function Login(props: any) {
  const onSubmit = (formData:LoginFormValuesType )=> {
props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Redirect  to = {"/profile"}/>
  }
  return <div className={style.loginBlock}>
    <h1>Login</h1>
    <LoginReduxForm onSubmit ={onSubmit} captchaUrl={props.captchaUrl}/>
  </div>
}

let mapStateToProps = (state: any) => {
  return {
      isAuth: state.auth.isAuth,
      captchaUrl: state.auth.captchaUrl
  }
}

export default  connect (mapStateToProps, {login}) (Login)

//types
type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormOwnPropsType = {
  captchaUrl: string
}