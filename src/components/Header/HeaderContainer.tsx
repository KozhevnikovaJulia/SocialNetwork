import React from "react"
import {Header} from "./Header"
import {logout} from "../../redux/AuthReducer"
import {connect, ConnectedProps} from "react-redux"
import {AppStateType} from "../../redux/StoreRedux"
import style from "./Header.module.css"
import {getProfile} from "../../redux/ProfileReducer"


export class HeaderContainer extends React.PureComponent<PropsFromRedux> {
    componentDidMount = () => { 
        // let userId 
        // = this.props.match.params.userId
        // if (!userId) {
        //     userId =  this.props.authorizedUserId
            // if (!userId) {
            //     this.props.history.push("/login")
            // }
        // }          
         this.props.getProfile(12386)    
    }
    componentDidUpdate = (prevProps: any, prevState: any) => {      
        this.props.getProfile(12386)    
   }
render = () => {
    return <div className={style.header}>        
        <Header {...this.props} profile={this.props.profile}/>      
    </div>
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile, 
        authorizedUserId: state.auth.id
    }
}  
  const connector = connect(mapStateToProps , {logout, getProfile})
  
  type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, {logout, getProfile} ) (HeaderContainer)
