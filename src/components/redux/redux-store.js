import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer

})

let store = createStore(reducers)



export default store