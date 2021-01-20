import React from "react"
import {Provider} from "react-redux"
import {combineReducers, createStore, applyMiddleware} from "redux"
import {profileReducer, PostsType} from "../../redux/ProfileReducer"
import {dialogsReducer, MessagesType, DialogArrayType} from "../../redux/DialogsReducer"
import {usersReducer, UserType} from "../../redux/UsersReducer"
import { reducer as formReducer } from "redux-form"
import {AppStateType} from "../../redux/StoreRedux"
import thunk from "redux-thunk"
import { authReducer } from "../../redux/AuthReducer"
import { appReducer } from "../../redux/AppReducer"

const redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const initialGlobalState = {
    profilePage: {
        posts: [
            { id: 1, message: "It is my first post", likesCount: 0 },
            { id: 2, message: "Hi", likesCount: 4 },
            { id: 3, message: "Hello", likesCount: 5 }
        ] as Array<PostsType>,
        profile: null,
        status: ""
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Ann" },
            { id: 2, name: "Andy" },
            { id: 3, name: "Mike" }
        ] as Array<DialogArrayType>,
        messages: [
            { id: 1, textMessage: "Hi" },
            { id: 2, textMessage: "Hello" },
            { id: 3, textMessage: "How are you" }
        ] as Array<MessagesType>  
    },
    usersPage: {
        users: [ ] as Array<UserType>,
        pageSize: 10,
        usersTotalCount:0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [1,2]
    },
    // form: formReducer,
    
    app: { isInitialized: false },
    auth: {
        id: null as number | null,
        email: null as string | null,
        login: "Julia" as string | null,
        isAuth: false
    }
};

export const storyBookStore = createStore(redusers, initialGlobalState as AppStateType, applyMiddleware(thunk));


export const ReduxStoreProviderDecorator = (StoryFn: any) =>
<Provider store={storyBookStore }>{StoryFn()}</Provider>

