import React from "react";
import {Profile} from "./Profile";
import {getProfile} from "../../redux/ProfileReducer";
import {connect, ConnectedProps} from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
export class ProfileContainer extends React.Component<ProfileContainerPropsType > {
    componentDidMount = () => {            
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }  
        this.props.getProfile(userId)         
    }
    render = () => {       
        return <div>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,    
        isAuth: state.auth.isAuth        
    }
}

const connector = connect(mapStateToProps , { getProfile})  
type PropsFromRedux = ConnectedProps<typeof connector>
type OunParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<OunParamsType> & PropsFromRedux

let WithUrlDataProfileContainer = withRouter (ProfileContainer)
export default connect (mapStateToProps, {getProfile})
     (WithUrlDataProfileContainer)
