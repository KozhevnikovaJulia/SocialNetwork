import React from "react"
import style from "./News.module.css"
import {MainImageWrapper} from "../../common/MainImageWrapper/MainImageWrapper"
import mainImg from "../../assets/image/sharon-mccutcheon--vgLTTWPesg-unsplash.jpg"


const News = React.memo(() => {
    const mainImage = {
        backgroundImage: `url(${mainImg})`
    }
    return <div className={style.newsContant}>
        <MainImageWrapper mainImage={mainImage} title="News" />
    </div>
}
)
export default News