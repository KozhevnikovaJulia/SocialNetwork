import React from "react"
import style from "./News.module.css"
import mainImg from "../../assets/image/sharon-mccutcheon--vgLTTWPesg-unsplash.jpg"


export function News() {
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
    return (
        <div className={style.newsContant}>
            <div className={style.mainImageWrapper } style={mainImage}></div>          
        </div>
)
}