import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from "../../util/Validator";
import {TextArea} from "../../common/FormControl/FormControl";

let maxLength10 = maxLengthCreator(10)

export function AddPostForm (props: any) {
  return (
    <form onSubmit={props.handleSubmit} >
      
       <div><Field component={TextArea} name="newPost" type="text" validate={[required, maxLength10 ]} /> </div>
      <div><button>Add post</button></div>
    </form>
  )
}
export const AddPostReduxForm = reduxForm({
  form: 'newPost'
})(AddPostForm)

