

let store = {
    _callSubscriber() {
        console.log('state has been changed')
    },

    _state: {
        profilePage: {
            postData: [
                { id: 1, message: "Hi, how are you?", likesCount: 0 },
                { id: 2, message: "It's my first post!", likesCount: 23 }
            ],
            newPostText: ""
        },
        messagesPage: {
            dialogData: [
                { id: 1, name: "Алексей" },
                { id: 2, name: "Олег" },
                { id: 3, name: "Игнат" },
                { id: 4, name: "Ольга" }
            ],
            messageData: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Good luck!!" }
            ],
            newMessageBody: ""
        }
        
    },



    getState() {
        return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let postMessage = { id: 3, message: this._state.profilePage.newPostText, likesCount: 111 }
            this._state.profilePage.postData.push(postMessage)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body
            this._state.messagesPage.messageData.push({id: 6, message: "AbraCadabra"})
            this._callSubscriber(this._state)
        }
    }
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (body) => ({ type: UPDATE_NEW_POST_TEXT, body: body })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})

window.store = store
export default store