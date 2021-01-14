import React from "react"
import style from "./Music.module.css"
import mainImg from "../../assets/image/pexels-moose-photos-1037992.jpg"


export function Music() {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.musicContant}>
            <div className={style.mainImageWrapper } style={mainImage}></div>          
        </div>
)
}