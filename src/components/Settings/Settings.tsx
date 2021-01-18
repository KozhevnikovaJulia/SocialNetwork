import React from "react"
import style from "./Settings.module.css"
import mainImg from "../../assets/image/icons8-team-dhZtNlvNE8M-unsplash.jpg"


export const Settings = React.memo (() => {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.musicContant}>
            <div className={style.mainImageWrapper } style={mainImage}></div>          
        </div>
)}
)