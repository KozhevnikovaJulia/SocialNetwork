import React, { useState, useEffect } from "react"

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export function ProfileStatusWithUseState(props: ProfileStatusPropsType) {
  let [editMode, setEditMode] = useState<boolean>(false)
  let [status, setStatus] = useState<string>(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  const onchangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }

  useEffect(() => {       
    setStatus(props.status)       
}, [props.status])  


  return (
    <div >
      { editMode
        ? <div>
          <input onChange={onchangeStatus} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status} />
        </div>
        :
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div> }
    </div>
  )
}



