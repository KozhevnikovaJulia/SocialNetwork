import React, {useState} from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {Paginator} from "../common/Paginator/Paginator"
import {action} from "@storybook/addon-actions"


export default {
  title: 'SocialNetwork/Paginator component',
  component: Paginator,
} as Meta;
const callBack = action("page changed")

export const PaginatorBaseExample = () => <Paginator portionSize={10} totalItemsCount={1000} pageSize={10 } currentPage={2} onChangePage={callBack} />;



