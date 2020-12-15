import React from "react";
import { parseConfigFileTextToJson } from "typescript";
import style from "./Profile.module.css";

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string)=> void
}


export class ProfileStatus extends React.Component< ProfileStatusPropsType > {  
  state = {
    editMode: false,
    status: this.props.status
  } 

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })   
     this.props.updateStatus (this.state.status)
     
  }
  onchangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render () {
    return ( 
      <div >
        {this.state.editMode
          ? <div>
            <input onChange = {this.onchangeStatus} autoFocus={true} onBlur ={this.deactivateEditMode} type="text" value={this.state.status} />
          </div>
          : <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
          </div>}
         
      </div>      
)
  }     
}

