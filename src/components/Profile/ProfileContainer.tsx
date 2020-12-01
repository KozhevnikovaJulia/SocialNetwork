import React from "react";
import Axios from "axios";
import {Profile} from "./Profile";
import { setUserProfile} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileAPI } from "../../api/api";

type MapStateToPropsType = {
    profile: any 
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type PathParamsType = {
    userId: string
}
type OwnProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnProfileContainerPropsType
export class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount = () => {     
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }  
        ProfileAPI.getUserProfile(userId)
        // Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {          
             this.props.setUserProfile(response.data)
        })
    }
    render = () => {       
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile            
    }
}
let WithUrlDataProfileContainer = withRouter (ProfileContainer)
export default connect (mapStateToProps, {setUserProfile })
     (WithUrlDataProfileContainer)
