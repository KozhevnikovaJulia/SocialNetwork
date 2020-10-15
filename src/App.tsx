import React from "react";
import "./App.css";
import {Route, BrowserRouter} from "react-router-dom";
import {StatePropsType} from "./State/State";
import {NavBur} from "./components/NavBur/NavBur";
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {
  state: StatePropsType
  addPost:()=> void
  changePost:(postMessage:string)=> void
}

function App(props:AppPropsType) {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header/>
          <NavBur/>
          <div className="app-wrapper-content">
            <Route path= "/profile" render={ () =>
                <Profile posts={props.state.profilePage.posts}
                         newPostText={props.state.profilePage.newPostText}
                         addPost={props.addPost}
                         changePost={props.changePost}/>} />
            <Route path= "/dialogs" render={ () =>
                <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />}/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App
