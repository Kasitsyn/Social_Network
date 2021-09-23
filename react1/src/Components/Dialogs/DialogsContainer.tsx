import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { compose } from 'redux';
import { actions } from './../../Redux/dialogs-reducer';
import { AppStateType } from '../../Redux/redux-store';
import { withAuthRedirectNoTS } from './../../hoc/withAuthRedirectNoTS';


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {sendMessage: actions.sendMessage}), withAuthRedirectNoTS)(Dialogs) as React.ComponentType
