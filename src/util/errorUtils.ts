import { Dispatch } from "redux"
import { setErrorAC, SetErrorActionType} from "../redux/AppReducer"

 export const handleServerAppError = <D> (data: any, dispatch: Dispatch <SetErrorActionType>) => {
    if (data.messages.length) {
        dispatch(setErrorAC(data.messages[0]))
    } else {
        dispatch(setErrorAC("Some error occurred"))
    }
}                
  

 export const handleServerNetworkError = (error: any, dispatch: Dispatch <SetErrorActionType>) => {
    dispatch(setErrorAC(error.message ? error.message : "Some error"))
 }