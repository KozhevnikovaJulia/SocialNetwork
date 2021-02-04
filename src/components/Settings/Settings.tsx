import React from "react"
import style from "./Settings.module.css"
import {MainImageWrapper} from "../../common/MainImageWrapper/MainImageWrapper"
import mainImg from "../../assets/image/clock.jpg"


const Settings = React.memo (() => {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.musicContant}>
            <MainImageWrapper mainImage = {mainImage} title="Settings"/>     
        </div>
)}
)
export default Settings