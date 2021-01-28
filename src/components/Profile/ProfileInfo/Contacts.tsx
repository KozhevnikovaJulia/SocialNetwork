import React from "react"
import style from "../Profile.module.css"

type ContactsPropsType = {  
    contactTitle: string
    contactValue: string
    
}

export const Contacts = React.memo ((props: ContactsPropsType) => {     
    return (       
        <div  className = {style.contacts}>
           <b>{props.contactTitle}: </b> {props.contactValue}
        </div>
    );
}
)