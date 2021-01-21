import React from "react"
import style from "./Music.module.css"
import mainImg from "../../assets/image/pexels-moose-photos-1037992.jpg"


const Music = React.memo (() => {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.musicContant}>
            <div className={style.mainImageWrapper } style={mainImage}></div>          
        </div>
)}
)
export default Music