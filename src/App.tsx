import React from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import {StatePropsType, ActionTypes} from "./redux/State";
import {NavBur} from "./components/NavBur/NavBur";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {
  state: StatePropsType
  dispatch: (action: ActionTypes ) => void
}

function App(props:AppPropsType) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
        <Header />
        <NavBur />
        <div className="app-wrapper-content">
          <Route path="/profile" render={() =>
            <Profile posts={props.state.profilePage.posts}
                     newPostText={props.state.profilePage.newPostText}
                     dispatch={props.dispatch} />} />
          <Route path="/dialogs" render={() =>
            <Dialogs dialogs={props.state.dialogsPage.dialogs}
                     messages={props.state.dialogsPage.messages} 
                     newMessageText={props.state.dialogsPage.newMessageText}
                     dispatch={props.dispatch}/>} />
        </div>
        </div>
      </BrowserRouter>
  );
}

export default App
