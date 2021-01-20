import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { AddPostReduxForm }  from "../components/AddPostForm/AddPostForm"
import {required, maxLengthCreator} from "../util/Validator"
import {action} from "@storybook/addon-actions"
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator"

export default {
  title: 'SocialNetwork/ AddPostForm component',
  component:  AddPostReduxForm ,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;
const callBack = action("Button inside form clicked")

export const AddPostFormBaseExample = () =>
  < AddPostReduxForm  onSubmit={callBack} />;


