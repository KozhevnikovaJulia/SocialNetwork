import React from "react"
import {connect, ConnectedProps} from "react-redux"
import "./App.css"
import {Route} from "react-router-dom"
import {NavBur} from "./components/NavBur/NavBur"
import  HeaderContainer  from "./components/Header/HeaderContainer"
import  ProfileContainer  from "./components/Profile/ProfileContainer"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import Login from "./components/Login/Login"
import { RightBur } from "./components/RightBur/RightBur"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {News} from "./components/News/News"
import {AppStateType} from "./redux/StoreRedux"
import { initializeApp } from "./redux/AppReducer"
import { Preloader } from "./common/Preloader/Preloader"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"


export class App extends React.Component<AppPropsType > {
  componentDidMount = () => {  
    this.props.initializeApp()         
}  
render = () => {
  if (!this.props.isInitialized) {
    return <Preloader />
  }
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-body">
          <NavBur />
          <RightBur />
          <div className="app-content">
            <Route path="/profile/:userId?" render={() =>
              <ProfileContainer />} />
            <Route path="/dialogs" render={() =>
              <DialogsContainer />} />
            <Route path="/users" render={() =>
              <UsersContainer />} />
            <Route path="/music" render={() =>
              <Music />} />
            <Route path="/settings" render={() =>
              <Settings />} />
            <Route path="/login" render={() =>
              <Login />} />
            <Route path="/news" render={() =>
              <News />} />
          </div>
        </div >
      </div>
  )
}
}

let mapStateToProps = (state: AppStateType) => {
  return {
    isInitialized: state.app.isInitialized
  }
}  
const connector = connect(mapStateToProps , {initializeApp})

type PropsFromRedux = ConnectedProps<typeof connector>

type AppPropsType = RouteComponentProps & PropsFromRedux

export default compose <React.ComponentType>(
  connect(mapStateToProps, {initializeApp} ),
  withRouter 
)(App)

