import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/profile-api';
import { PostDataType, ProfileType, PhotosType } from '../types/types';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'



let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 },
        { id: 3, message: "Yo!", likesCount: 223 },
        { id: 4, message: "AUF", likesCount: 2212 }
    ] as PostDataType[],
    profile: null as ProfileType | null,
    status: "",
    newPostText:""
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let postMessage = { id: 3, message: action.newPostText, likesCount: 111 }
            return {
                ...state,
                postData: [...state.postData, postMessage],

            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                postData: state.postData.filter(p => p.id !== action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type UpdateNewPostTextActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}




export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreatorType => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId })
export const setStatus = (status: string): SetStatusType => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const setUserProfileThunk = (userId: number) => async (dispatch: any) => {
    let profileData = await profileAPI.setUser(userId)
    dispatch(setUserProfile(profileData))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))

}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))

}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) dispatch(setUserProfileThunk(userId))
    else {
        dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer


