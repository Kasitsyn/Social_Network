
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
    
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
// const SEND_MESSAGE = 'SEND_MESSAGE'
// const ADD_POST = 'ADD-POST'
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let store = {
    _callSubscriber() {
        console.log('state has been changed')
    },

    _state: {
        // profilePage: {
        //     postData: [
        //         { id: 1, message: "Hi, how are you?", likesCount: 0 },
        //         { id: 2, message: "It's my first post!", likesCount: 23 }
        //     ],
        //     newPostText: ""
        // },
        // messagesPage: {
        //     dialogData: [
        //         { id: 1, name: "Алексей" },
        //         { id: 2, name: "Олег" },
        //         { id: 3, name: "Игнат" },
        //         { id: 4, name: "Ольга" }
        //     ],
        //     messageData: [
        //         { id: 1, message: "Hi!" },
        //         { id: 2, message: "How are you?" },
        //         { id: 3, message: "Good luck!!" }
        //     ],
        //     newMessageBody: ""
        // }
        
    },



    getState() {
        return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profileReducer = profileReducer(this._state.profilePage, action) 
        this._state.dialogsReducer = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)
    }
}






window.store = store
export default store