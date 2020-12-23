import React from 'react';
import { reduxForm, Field } from 'redux-form'



export function AddMessageForm(props: any) {
  return (
    <form onSubmit={props.handleSubmit} >
      <div><Field component="textarea" name="newMessage" type="text" placeholder="Enter your message" /> </div>
      <div><button>Send message</button></div>
    </form>
  )
}
export const AddMessageReduxForm = reduxForm({
  form: 'newMessage'
})(AddMessageForm)


