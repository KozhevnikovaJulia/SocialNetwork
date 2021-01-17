import React from "react"
import { WrappedFieldMetaProps } from "redux-form"
import style from "./FormControl.module.css"

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

 const FormControl: React.FC<FormControlPropsType> = ({meta, children}) => {

  const hasError = meta.touched && meta.error

  return (
  <div>
    <div className={style.formControl + " " + (hasError ? style.error: "")}>
      {children}
    </div>
    {hasError && <span className={style.errorSpan } >{meta.error}</span>}
   
  </div>
  )
}

export function TextArea (props: any) {
  const {input, meta, children, ...restProps} = props
  return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}

export function Input (props: any) {
  const {input, meta, children, ...restProps} = props
  return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}


