import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert"
import {useSelector, useDispatch} from "react-redux"
import {AppStateType} from "../../redux/StoreRedux"
import {setErrorAC} from "../../redux/AppReducer"

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}


export function ErrorSnackBar() {
    const error  = useSelector<AppStateType, string | null>(state => state.app.error)
    const dispatch = useDispatch()
   
//   const [open, setOpen] = React.useState(false);
let isOpen = error !== null

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorAC(null))
    };

  return (    
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    
  );
}