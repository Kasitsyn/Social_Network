const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

let initialState = {
    postData: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let postMessage = { id: 3, message: state.newPostText, likesCount: 111 }
                let stateCopy = { ...state }
                stateCopy.postData = [ ...state.postData ]
                stateCopy.postData.push(postMessage)
                stateCopy.newPostText = ''
                return stateCopy
            }
        case UPDATE_NEW_POST_TEXT:
            {
                let stateCopy = { ...state }
                stateCopy.newPostText = action.newText
                return stateCopy
            }
        default:
            return state
    }
}

export default profileReducer