import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {AddMessageReduxForm }  from "../components/AddMessageForm/AddMessageForm"
import {action} from "@storybook/addon-actions"
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator"

export default {
  title: 'SocialNetwork/AddMessageForm component',
  component: AddMessageReduxForm ,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;
const callBack = action("Button inside form clicked")
export const AddMessageFormBaseExample = () =>
  <AddMessageReduxForm  onSubmit={callBack} />;


