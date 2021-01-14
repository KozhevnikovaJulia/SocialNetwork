import React from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import {NavBur} from "./components/NavBur/NavBur";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import  ProfileContainer  from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login"
import { RightBur } from "./components/RightBur/RightBur"
import {Music} from "./components/Music/Music"
import {Settings} from "./components/Settings/Settings"
import {News} from "./components/News/News"

type AppPropsType = {
 
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        {/* <div className="app-header">
          
        </div> */}
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
    </BrowserRouter>
  );
}

export default App
