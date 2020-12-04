import React from "react";
import {Header} from "./Header";
import {getMe} from "../../redux/AuthReducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/StoreRedux";
import style from './Header.module.css';
export class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount = () => {  
        this.props.getMe()         
    }  

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
  const connector = connect(mapStateToProps , { getMe})
  
  type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, {getMe} ) (HeaderContainer)
