const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

 const profileReducer = (state, action) => {
    if (action.type === 'ADD-POST') {
        let postMessage = { id: 3, message: this._state.profilePage.newPostText, likesCount: 111 }
        state.postData.push(postMessage)
        state.newPostText = ''
        
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText
        
    }
    return state
}

export default profileReducer  