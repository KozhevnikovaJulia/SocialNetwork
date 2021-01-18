import React from "react"
import {Header} from "./Header"
import {logout} from "../../redux/AuthReducer"
import {connect, ConnectedProps} from "react-redux"
import {AppStateType} from "../../redux/StoreRedux"
import style from "./Header.module.css"


export class HeaderContainer extends React.PureComponent<PropsFromRedux> {
render = () => {
    return <div className={style.header}>        
        <Header {...this.props} />      
    </div>
}
}

let mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}  
  const connector = connect(mapStateToProps , {logout})
  
  type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, {logout} ) (HeaderContainer)
