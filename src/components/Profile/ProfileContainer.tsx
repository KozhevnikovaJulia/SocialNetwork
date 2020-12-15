import React from "react";
import {Profile} from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../redux/ProfileReducer";
import {connect, ConnectedProps} from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
export class ProfileContainer extends React.Component<ProfileContainerPropsType > {
    componentDidMount = () => {            
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12386"
        }  
        this.props.getProfile(userId)    
        this.props.getStatus(userId)     
    }
    render = () => {    
        return <div>
            <Profile {...this.props} profile={this.props.profile} updateStatus = {this.props.updateStatus} status={this.props.status}/>
        </div>
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile, 
        status: state.profilePage.status   
        // isAuth: state.auth.isAuth        
    }
}

const connector = connect(mapStateToProps , { getProfile, getStatus, updateStatus})  
type PropsFromRedux = ConnectedProps<typeof connector>
type OunParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<OunParamsType> & PropsFromRedux

export default compose <React.ComponentType>(
    connect (mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect 
 )(ProfileContainer)

    