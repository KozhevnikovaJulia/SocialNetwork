import React, { ChangeEvent } from "react";
import Axios from "axios";
import {Header} from "./Header";
import {Preloader} from "../../common/Preloader/Preloader"
import { toggleIsFetching } from "../../redux/UsersReducer";
import {setUserData, DataType } from "../../redux/AuthReducer";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../redux/StoreRedux";
import style from './Header.module.css';

// type MapStateToPropsType = {
//     id: number 
//     email: string 
//     login: string 
// }
// type MapDispatchToPropsType = {
//     setUserData: (data: DataType) => void
// }

// type OwnProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

// type HeaderContainerPropsType = {
//     id: number | null
//     email: string | null
//     login: string | null
//     setUserData: (data: DataType) => void
// }


export class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount = () => {
       
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data.login)                
            }
        })
    }  

render = () => {
    return <div className={style.header}>
{/*         
        {this.props.isFetching ? <Preloader/> : null} */}
        
        <Header {...this.props} />
      
    </div>
}
}


let mapStateToProps = (state: AppStateType) => {
    return {
        // auth: state.auth

        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login

    //     id: state.auth.data.id,
    //     email: state.auth.data.email,
    //     login: state.auth.data.login
    }
}

  
  const connector = connect(mapStateToProps , { setUserData})
  
//   // The inferred type will look like:
//   // {isOn: boolean, toggleOn: () => void}
  type PropsFromRedux = ConnectedProps<typeof connector>
  
//   type Props = PropsFromRedux & {
//     backgroundColor: string
//   }

export default connect(mapStateToProps, { setUserData} ) (HeaderContainer)
