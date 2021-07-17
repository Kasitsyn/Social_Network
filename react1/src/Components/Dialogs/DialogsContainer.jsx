import { connect } from 'react-redux'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        newMessageBody: state.messagesPage.newMessageBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }


}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer