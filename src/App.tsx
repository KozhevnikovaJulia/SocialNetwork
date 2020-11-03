import React from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import {StatePropsType, ActionTypes} from "./redux/Store";
import {NavBur} from "./components/NavBur/NavBur";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";

type AppPropsType = {
  //  store: any
}

function App(props:AppPropsType) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
        <Header />
        <NavBur />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() =>
            <Profile />} />
          <Route path="/dialogs" render={() =>
            <DialogsContainer />} />
          <Route path="/users" render={() =>
            <UsersContainer />} />
        </div>
        </div>
      </BrowserRouter>
  );
}

export default App
