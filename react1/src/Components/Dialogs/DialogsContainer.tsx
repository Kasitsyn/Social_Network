import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { actions } from './../../Redux/dialogs-reducer';
import { AppStateType } from '../../Redux/redux-store';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {sendMessage: actions.sendMessage}), withAuthRedirect)(Dialogs)
