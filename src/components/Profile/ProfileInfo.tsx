import React from "react";
import style from "./Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import mainImg from "../../images/wZlmqJc56E1114.jpg"

type ProfileInfoPropsType = {
  profile: any
}


export function ProfileInfo(props: ProfileInfoPropsType) {
  if(!props.profile){
    return <Preloader/>}
  return (   
        <div >
       <img src={mainImg}/>
       {/* <img src="https://sun9-72.userapi.com/c854024/v854024783/139230/wZlmqJc56E4.jpg" /> */}
            <div className={style.ava}>
                <img src={props.profile.photos.large} />
                {/* <img src="https://images.pexels.com/photos/3473525/pexels-photo-3473525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> */}
                ava
            </div>
        </div>      
  )
}

