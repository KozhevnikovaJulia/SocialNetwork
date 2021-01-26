import React from "react"
import {Profile} from "./Profile"
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../redux/ProfileReducer"
import {connect, ConnectedProps} from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

export class ProfileContainer extends React.PureComponent<ProfileContainerPropsType > {    
    refrashProfile = () => {
        let userId  = this.props.match.params.userId
        if (!userId) {
            userId =  this.props.authorizedUserId
            if (!userId) {
                return this.props.history.push("/login")
            }
        }  
        this.props.getProfile(+userId)    
        this.props.getStatus(+userId)
    }
    componentDidMount = () => {
        this.refrashProfile()
    }

    componentDidUpdate = (prevProps: any, prevState: any) => {
        if (this.props.match.params.userId !== prevProps.match.params.userId ||
            this.state !== prevState) {
            this.refrashProfile()
        }
    }
    render = () => {    
        return <div>
            <Profile {...this.props} profile={this.props.profile}
                                     updateStatus = {this.props.updateStatus}
                                     status={this.props.status}
                                     savePhoto={this.props.savePhoto}
                                     isOwner = {!this.props.match.params.userId}
                                     saveProfile = {this.props.saveProfile}/>
        </div>
    }
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile, 
        status: state.profilePage.status,  
        isAuth: state.auth.isAuth,
        authorizedUserId:  state.auth.id   
    }
}

const connector = connect(mapStateToProps , { getProfile, getStatus, updateStatus, savePhoto, saveProfile})  
type PropsFromRedux = ConnectedProps<typeof connector>
type OunParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<OunParamsType> & PropsFromRedux

export default compose <React.ComponentType>(
    connect (mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect 
 )(ProfileContainer)

    