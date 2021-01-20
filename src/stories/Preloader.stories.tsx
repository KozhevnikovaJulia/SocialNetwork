import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {Preloader}  from "../common/Preloader/Preloader"
import {action} from "@storybook/addon-actions"

export default {
  title: 'SocialNetwork/Preloader component',
  component: Preloader,
} as Meta;
const callBack = action("Button inside form clicked")
export const PreloaderBaseExample = () =>
  <Preloader />;

