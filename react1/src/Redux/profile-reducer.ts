// Imports

import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodeEnum } from '../api/api';
import { profileAPI } from '../api/profile-api';
import { PostDataType, ProfileType, PhotosType } from '../types/types';
import { BaseThunkType, InferActionTypes } from './redux-store';

// State

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 },
        { id: 3, message: "Yo!", likesCount: 223 },
        { id: 4, message: "AUF", likesCount: 2212 }
    ] as PostDataType[],
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}

// Action Creators

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: 'SN/PROFILE/ADD-POST', newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
    updateNewPostTextActionCreator: (text: string) => ({ type: 'SN/PROFILE/UPDATE-NEW-POST-TEXT', newText: text } as const),
    deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),
    setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status } as const),
    savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const)

}

// Reducers

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST':
            let postMessage = { id: 3, message: action.newPostText, likesCount: 111 }
            return {
                ...state,
                postData: [...state.postData, postMessage],

            }
        case 'SN/PROFILE/UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SN/PROFILE/SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state
    }
}

// Thunks

export const setUserProfileThunk = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.setUser(userId)
    dispatch(actions.setUserProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodeEnum.Success) dispatch(actions.setStatus(status))

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === ResultCodeEnum.Success) dispatch(actions.savePhotoSuccess(data.data.photos))

}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === ResultCodeEnum.Success) {
        if (userId != null) {
            dispatch(setUserProfileThunk(userId))
        } else {
            throw new Error('userId can not be null')
        }
    }
    else {
        dispatch(stopSubmit("edit-profile", { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}

export default profileReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

// Trash

// type AddPostActionCreatorType = {
//     type: typeof 'SN/PROFILE/ADD-POST'
//     newPostText: string
// }

// type SetUserProfileType = {
//     type: typeof 'SN/PROFILE/SET_USER_PROFILE'
//     profile: ProfileType
// }

// type UpdateNewPostTextActionCreatorType = {
//     type: typeof 'SN/PROFILE/UPDATE-NEW-POST-TEXT'
//     newText: string
// }

// type DeletePostType = {
//     type: typeof 'SN/PROFILE/DELETE_POST'
//     postId: number
// }

// type SetStatusType = {
//     type: typeof 'SN/PROFILE/SET_STATUS'
//     status: string
// }

// type SavePhotoSuccessType = {
//     type: typeof 'SN/PROFILE/DELETE_POST'
//     photos: PhotosType
// }