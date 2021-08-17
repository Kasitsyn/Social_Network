import { usersAPI, profileAPI } from './../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'


let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 },
        { id: 3, message: "Yo!", likesCount: 223 },
        { id: 4, message: "AUF", likesCount: 2212 }
    ],
    // newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let postMessage = { id: 3, message: action.newPostText, likesCount: 111 }
            return {
                ...state,
                postData: [...state.postData, postMessage],
                // newPostText: action.newPostText
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
        default:
            return state
    }
}
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.setUser(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) dispatch(setStatus(status))
        })
    }
}
export default profileReducer