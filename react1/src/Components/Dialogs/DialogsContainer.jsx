import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { actions } from './../../Redux/app-reducer';


let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(actions.sendMessageCreator(newMessageBody))
        }

    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
