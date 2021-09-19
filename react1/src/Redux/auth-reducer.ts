import { stopSubmit } from "redux-form"
import { ResultCodeEnum } from "../api/api"
import { authAPI } from "../api/auth-api"
import { securityAPI } from './../api/security-api';


const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

export type InitialStateType2 = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA 
    payload: SetAuthUserDataActionPayloadType

}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS 
    payload: {captchaUrl: string}

}



const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const setAuthUserDataThunk = () => async (dispatch: any) => {
    let data = await authAPI.me()
    if (data.resultCode === ResultCodeEnum.Success) {
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const logIn = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserDataThunk())

    } else {
        if (data.resultCode === ResultCodeEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }


        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: errorMessage }))
    }
}



export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))

    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

