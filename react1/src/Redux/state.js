
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

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
        profileReducer(_state.profilePage) 
        dialogsReducer(_state.messagesPage) 
    }
}



export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

window.store = store
export default store