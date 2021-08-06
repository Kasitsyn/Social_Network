import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { sendMessageCreator } from './../../Redux/dialogs-reducer';


let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        //newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
