import React from "react"
import style from "./Music.module.css"
import {MainImageWrapper} from "../../common/MainImageWrapper/MainImageWrapper"
import mainImg from "../../assets/image/pexels-moose-photos-1037992.jpg"


const Music = React.memo (() => {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.musicContant}>
            <MainImageWrapper mainImage={mainImage} title="Music"/>        
        </div>
)}
)
export default Music