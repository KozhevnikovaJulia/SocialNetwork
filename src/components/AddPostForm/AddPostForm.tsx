import React from 'react';
import { reduxForm, Field } from 'redux-form'



export function AddPostForm (props: any) {
  return (
    <form onSubmit={props.handleSubmit} >
       <div><Field component="textarea" name="newPost" type="text" /> </div>
      <div><button>Add post</button></div>
    </form>
  )
}
export const AddPostReduxForm = reduxForm({
  form: 'newPost'
})(AddPostForm)

