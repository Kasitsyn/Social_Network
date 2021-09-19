
import { setAuthUserDataThunk } from './auth-reducer';
import { InferActionTypes } from './redux-store';

type ActionsType = InferActionTypes<typeof actions>


let initialState = {
    initialized: false
}


export type InitialStateType = typeof initialState


export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const actions = {
    initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const)
}

// export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(setAuthUserDataThunk())
    Promise.all([promise]).then( () => dispatch( actions.initializedSuccess() ) ) 
}