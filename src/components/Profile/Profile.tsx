import React from "react"
import style from "./Profile.module.css"
import {MyPostsContainer} from "./MyPosts/MyPostsContainer"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo"
import {ProfileType} from "../../redux/ProfileReducer"
import {ProfileBur} from "./ProfileBur"
import {MainImageWrapper} from "../../common/MainImageWrapper/MainImageWrapper"
import mainImg from "../../assets/image/pexels-moose-photos-1037995.jpg"
import {Route, useRouteMatch, Switch} from "react-router-dom"
import {ProfileAva} from "./ProfileAva/ProfileAva"

type ProfilePropsType = {    
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    isOwner: boolean
    saveProfile:(formData: any) => void
}

export const Profile = React.memo ((props:ProfilePropsType) => {     
    const mainImage= {
        backgroundImage: `url(${mainImg })`
      }
      let { path, url } = useRouteMatch()
    return <div className={style.profileContant}>
        <MainImageWrapper mainImage={mainImage} title="Profile" />

        <ProfileAva isOwner={props.isOwner} profile={props.profile} savePhoto={props.savePhoto}
            status={props.status}
            updateStatus={props.updateStatus} />

        <ProfileBur />

        <Switch>      
            <Route path={`${path}/aboutMe`} render={() =>
                <ProfileInfo isOwner={props.isOwner}
                    profile={props.profile}
                    saveProfile={props.saveProfile}
                />} />
            <Route path={`${path}/myPosts`} render={() =>
                <MyPostsContainer />} />
        </Switch>
    </div>
}
)