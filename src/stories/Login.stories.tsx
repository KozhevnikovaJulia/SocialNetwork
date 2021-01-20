import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import Login  from "../components/Login/Login"
import {action} from "@storybook/addon-actions"
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator"


export default {
  title: 'SocialNetwork/Login component',
  component: Login,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;
const callBack = action("Button inside form clicked")
export const LoginBaseExample = () =>
  <Login onSubmit={callBack} />;

