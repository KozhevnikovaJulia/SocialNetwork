import React from "react"
import style from "../Profile.module.css"

type ContactsPropsType = {  
    contactTitle: any
    contactValue: any
    
}

export const Contacts = React.memo ((props: ContactsPropsType) => {     
    return (       
        <div  className = {style.contacts}>
           <b>{props.contactTitle}: </b> {props.contactValue}
        </div>
    );
}
)