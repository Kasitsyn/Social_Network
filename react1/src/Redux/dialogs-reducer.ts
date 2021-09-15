const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
export const sendMessageCreator = (newMessageBody: any) => ({ type: SEND_MESSAGE, newMessageBody })

type DialogType = {
    id: number
    name: string
}

type MessageDataType = {
    id: number
    message: string
}

let initialState = {
    dialogData: [
        { id: 1, name: "Алексей" },
        { id: 2, name: "Олег" },
        { id: 3, name: "Игнат" },
        { id: 4, name: "Ольга" }
    ] as Array<DialogType>,
    messageData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Good luck!!" }
    ]as Array<MessageDataType>
    
}
export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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
