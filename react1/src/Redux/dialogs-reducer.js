const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

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
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let newMessage = { id: 6, message: state.newMessageBody }
            state.messageData.push(newMessage)
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export default dialogsReducer