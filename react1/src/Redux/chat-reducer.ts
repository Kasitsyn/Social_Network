// Imports

import { FormAction } from "redux-form"
import { ChatMessageType, StatusType } from "../api/chat-api";
import { BaseThunkType, InferActionTypes } from "./redux-store";
import { chatAPI } from './../api/chat-api';
import { Dispatch } from "redux";

// State

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

//Action Creators

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({ type: 'SN/CHAT/MESSAGES_RECEIVED', payload: { messages } } as const),
    statusChanged: (status: StatusType) => ({ type: 'SN/CHAT/STATUS_CHANGED', payload: { status } } as const),
}

// Reducer

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/CHAT/MESSAGES_RECEIVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case 'SN/CHAT/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }

        default:
            return state
    }
}


//Thunks

let _newMessageHandler: (((messages: ChatMessageType[]) => void) | null) = null

const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler === null) {

        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _newStatusChangedHandler: (((status: StatusType) => void) | null) = null

const newStatusChangedsHandlerCreator = (dispatch: Dispatch) => {
    if (_newStatusChangedHandler === null) {

        _newStatusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _newStatusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessagesHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', newStatusChangedsHandlerCreator(dispatch))
}


export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessagesHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', newStatusChangedsHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}




export default chatReducer

//Types

export type InitialStateType = typeof initialState
type ActionsType = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

