import React from "react";
import Axios from "axios";
import {Profile} from "./Profile";
import { setUserProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";


type ProfileContainerPropsType ={  
    profile: any 
    setUserProfile: (profile: any) => void
}

export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount = () => {       
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {          
             this.props.setUserProfile(response.data)
        })
    }
    render = () => {       
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile            
    }
}

export default connect (mapStateToProps, {setUserProfile })
     (ProfileContainer)
