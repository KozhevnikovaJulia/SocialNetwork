import React from "react"
import style from "./Message.module.css"

type MessagePropsType = {
    textMessage: string
    id:number
}
export const Message = React.memo ((props:MessagePropsType) => {
    return (
        <div className={style.message}>
            {props.textMessage}
        </div>
    )}
)