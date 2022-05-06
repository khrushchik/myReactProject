import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        sidebar: sidebarReducer,
        dialogPage: dialogsReducer,
        usersPage: usersReducer,
        auth: authReducer
    });

let store = createStore(reducers);

window.store = store

export default store;