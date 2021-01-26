import React from "react"
import {connect, ConnectedProps} from "react-redux"
import "./App.css"
import {Route, HashRouter, Switch} from "react-router-dom"
import {NavBur} from "./components/NavBur/NavBur"
import HeaderContainer from "./components/Header/HeaderContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import UsersContainer from "./components/Users/UsersContainer"
import RightBurContainer from "./components//RightBur/RightBurContainer"
import { AppStateType } from "./redux/StoreRedux"
import { initializeApp } from "./redux/AppReducer"
import { Preloader } from "./common/Preloader/Preloader"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { compose } from "redux"
import { store } from "./redux/StoreRedux"
import { Provider } from "react-redux"
import { withSuspense } from "./hoc/withSuspense"
import {MyPostsContainer} from "./components/Profile/MyPosts/MyPostsContainer"
import {ProfileInfo} from "./components/Profile/ProfileInfo/ProfileInfo"

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")) // Ленивая загрузка
const Settings = React.lazy(() => import("./components/Settings/Settings"))
const News = React.lazy(() => import("./components/News/News"))
const Music = React.lazy(() => import("./components/Music/Music"))
const Login = React.lazy(() => import("./components/Login/Login"))

export class App extends React.PureComponent<AppPropsType> {
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
          <RightBurContainer />
          <div className="app-content">
            <Switch>
              <Route path="/profile/:userId?" render={() =>
                <ProfileContainer />} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" render={() =>
                <UsersContainer />} />
              <Route path="/music" render={withSuspense(Music)} />
              <Route path="/settings" render={withSuspense(Settings)} />
              <Route path="/login" render={withSuspense(Login)} />
              <Route path="/news" render={withSuspense(News)} />
            </Switch>
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

let AppContainer =  compose <React.ComponentType>(
  connect(mapStateToProps, {initializeApp} ),
  withRouter 
)(App)


export const MainApp = React.memo(() => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>

}
)
