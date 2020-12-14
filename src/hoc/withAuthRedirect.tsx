import { AppStateType } from '../redux/StoreRedux';
import React from "react";
import {Redirect} from "react-router-dom";
import {connect, ConnectedProps} from "react-redux";

let mapStateToPropsForRedirect = (state: any) => {
    return { 
        isAuth: state.auth.isAuth        
    }
}

const connector = connect(mapStateToPropsForRedirect, {})  
type PropsFromRedux = ConnectedProps<typeof connector>


export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>)  {

    function RedirectComponent (props: PropsFromRedux){  
        let {isAuth, ...restProps} = props
            if (!isAuth) return  <Redirect to ="/login" />    
            return <WrappedComponent {...restProps as WCP} />        
    }
    let ConnectedRedirectComponent = connect<PropsFromRedux>(mapStateToPropsForRedirect, {})(RedirectComponent)
    return  ConnectedRedirectComponent
}


