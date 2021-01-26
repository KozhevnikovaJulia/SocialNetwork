export enum ACTIONS_TYPE {
  INITIALIZED_SUCCESSED = "socialNetwork/app/INITIALIZED-SUCCESSED",
  SET_ERROR = "socialNetwork/app/SET_ERROR",
  SET_USER_DATA = "socialNetwork/auth/SET-USER-DATA",
  GET_CAPTCHA_URL_SUCCESS = "socialNetwork/auth/GET_CAPTCHA_URL_SUCCESS",
  SEND_MESSAGE = "socialNetwork/dialogs/SEND-MESSAGE",
  FOLLOW = "socialNetwork/users/FOLLOW",
  UNFOLLOW = "socialNetwork/users/FUNFOLLOW",
  SETUSERS = "socialNetwork/users/FSET-USERS",
  SETCURRENTPAGE = "socialNetwork/users/FSET-CURRENT-PAGE",
  SETUSERSTOTALCOUNT = "socialNetwork/users/FSET-USERS-TOTAL-COUNT",
  TOGGLEISFATCHING = "socialNetwork/users/FTOGGLE-IS-FETCHING",
  TOGGLEFOLLOWINGINPROGRESS = "socialNetwork/users/FTOGGLE-FOLLOWING-IN-PROGRESS",
  ADD_POST = "socialNetwork/profile/ADD-POST",
  SET_USER_PROFILE = "socialNetwork/profile/SET-USER-PROFILE",
  SET_STATUS = "socialNetwork/profile/SET-STATUS",
  REMOVE_POST = "socialNetwork/profile/REMOVE-POST",
  SAVE_PHOTO_SUCCESS = "socialNetwork/profile/SAVE-PHOTO-SUCCESS"
}