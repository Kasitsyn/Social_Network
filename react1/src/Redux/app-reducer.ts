
import { setAuthUserDataThunk } from './auth-reducer';

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

export type InitialStateType = {
    initialized: boolean
    
}

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}


let initialState: InitialStateType = {
    initialized: false
}



export const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setAuthUserDataThunk())
    Promise.all([promise]).then( () => dispatch( initializedSuccess() ) ) 
}