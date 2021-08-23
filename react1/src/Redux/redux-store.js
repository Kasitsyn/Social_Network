import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { appReducer } from './app-reducer';
import compose from './../Components/Profile/ProfileContainer';



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store
export default store