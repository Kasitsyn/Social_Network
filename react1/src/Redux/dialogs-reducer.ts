//Imports

import {InferActionTypes } from "./redux-store"

//State

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
    ]as Array<MessageDataType>,
    
}

// Action Creators

export const actions = {
   sendMessageCreator: (newMessageBody: string) => ({ type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody })
}



// Reducers

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
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

//Types

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>

type DialogType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}
