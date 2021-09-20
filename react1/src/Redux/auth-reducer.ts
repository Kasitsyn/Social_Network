// Imports

import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeEnum } from "../api/api"
import { authAPI } from "../api/auth-api"
import { securityAPI } from './../api/security-api';
import { BaseThunkType, InferActionTypes } from "./redux-store";

// State

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

//Action Creators

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({ type: 'SN/APP/SET_USER_DATA', payload: { userId, email, login, isAuth } } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({ type: 'SN/APP/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } } as const)
}

// Reducer

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/SET_USER_DATA':
        case 'SN/APP/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}


//Thunks

export const getAuthUserDataThunk = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }

}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserDataThunk())

    } else {
        if (data.resultCode === ResultCodeEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }


        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: errorMessage }))
    }
}

export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))

    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

//Types

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


//Trash
// old version of types for Action Creators
// type SetAuthUserDataActionPayloadType = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
// }

// type SetAuthUserDataActionType = {
//     type: typeof SET_USER_DATA 
//     payload: SetAuthUserDataActionPayloadType

// }

// type GetCaptchaUrlSuccessActionType = {
//     type: typeof GET_CAPTCHA_URL_SUCCESS 
//     payload: {captchaUrl: string}

// }

// const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): ActionTypes => ({ type: 'SN/APP/SET_USER_DATA', payload: { userId, email, login, isAuth } })
// export const getCaptchaUrlSuccess = (captchaUrl: string): ActionTypes => ({ type: 'SN/APP/GET_CAPTCHA_URL_SUCCESS', payload: { captchaUrl } })

