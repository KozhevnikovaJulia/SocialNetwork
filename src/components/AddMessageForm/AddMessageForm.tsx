import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from "../../util/Validator";
import {TextArea} from "../../common/FormControl/FormControl";

 let maxLength50 = maxLengthCreator(50)

export function AddMessageForm(props: any) { 
  return (
    <form onSubmit={props.handleSubmit} >
      <div><Field component={TextArea} name="newMessage" type="text" placeholder="Enter your message" validate={[required, maxLength50 ]}/> </div>
      <div><button>Send message</button></div>
    </form>
  )
}
export const AddMessageReduxForm = reduxForm({
  form: 'newMessage'
})(AddMessageForm)


