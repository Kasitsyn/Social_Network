import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { appReducer } from './app-reducer';
import compose from '../Components/Profile/ProfileContainer';
import chatReducer from "./chat-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

type RootReducerType = typeof rootReducer 
export type AppStateType = ReturnType<RootReducerType>
export type PropertiesTypes<T> = T extends{[key: string]: infer U} ? U : never
export type InferActionTypes<T extends{[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))
//@ts-ignore
window.store = store
    
export default store