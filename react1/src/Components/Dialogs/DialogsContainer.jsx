import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogData: state.messagesPage.dialogData,
        messageData: state.messagesPage.messageData,
        newMessageBody: state.messagesPage.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch

    }
}



let AuthRedirect = withAuthRedirect(Dialogs)

// let mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }

// AuthRedirect = connect(mapStateToPropsForRedirect)(AuthRedirect)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirect)
export default DialogsContainer