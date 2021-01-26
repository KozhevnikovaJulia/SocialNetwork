import React from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {ProfileStatus}  from "../components/Profile/ProfileInfo/ProfileStatus"
import {action} from "@storybook/addon-actions"

export default {
  title: 'SocialNetwork/ProfileStatus component',
  component: ProfileStatus,
} as Meta;
const callBack = action("Status chenged")
export const PreloaderBaseExample = () =>
  <ProfileStatus status = {"I am fine"} updateStatus = {callBack} />;

