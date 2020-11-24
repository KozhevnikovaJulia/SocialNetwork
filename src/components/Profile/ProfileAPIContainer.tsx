import React from "react";
import Axios from "axios";
import {Profile} from "./Profile"


type ProfileAPIPropsType ={
    // posts: Array<PostsType>
    // newPostText: string
    profile: any 
    setUserProfile: (profile: any) => void
}

export class ProfileAPIContainer extends React.Component<ProfileAPIPropsType> {
    componentDidMount = () => {       
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {          
             this.props.setUserProfile(response.data)
        })
    }
    render = () => {       
        return <div>
            <Profile {...this.props}/>
        </div>
    }
}

