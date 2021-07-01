const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    state.newMessageBody = action.body

} else if (action.type === SEND_MESSAGE) {
    let newMessage = { id: 6, message: this._state.messagesPage.newMessageBody }
    state.messageData.push(newMessage)
    state.newMessageBody = ''

}
return state
}

export default dialogsReducer 