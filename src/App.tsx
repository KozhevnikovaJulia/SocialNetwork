import React from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import {NavBur} from "./components/NavBur/NavBur";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import  ProfileContainer  from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login"

type AppPropsType = {
 
}

function App(props:AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBur />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() =>
            <ProfileContainer />} />
          <Route path="/dialogs" render={() =>
            <DialogsContainer />} />
          <Route path="/users" render={() =>
            <UsersContainer />} />
          <Route path="/login" render={() =>
            <Login />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
