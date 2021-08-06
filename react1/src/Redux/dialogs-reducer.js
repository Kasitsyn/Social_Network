const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
// export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

let initialState = {
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
    
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = { id: 6, message: action.newMessageBody }
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
                
            }
        default:
            return state
    }
}


export default dialogsReducer
