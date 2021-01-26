import React from "react"
import style from "./MainImageWrapper.module.css"

export const MainImageWrapper = React.memo ((props:{mainImage: object, title: string}) => {
 
  return <div>
<div className={style.mainImageWrapper} style={props.mainImage}></div>       
<div className={style.titleOnImage} >
                <div className={style.titleOnImageBlock } >
                    <h2>{props.title}</h2>
                </div>
            </div>     
  </div>
  
  
}
)
