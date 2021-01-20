import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import DialogsContainer from "../components/Dialogs/DialogsContainer"
import {action} from "@storybook/addon-actions"
import {ReduxStoreProviderDecorator} from "./decorators/ReduxStoreProviderDecorator"
import {Route, HashRouter} from "react-router-dom"


export default {
  title: 'SocialNetwork/Dialogs component',
  component: DialogsContainer ,
  decorators: [ReduxStoreProviderDecorator]
} as Meta;
const callBack = action("Button inside form clicked")

export const DialogsBaseExample = () =>
  <HashRouter>

    <Route path="/dialogs" render={() =>
      <DialogsContainer />} />
  </HashRouter>




