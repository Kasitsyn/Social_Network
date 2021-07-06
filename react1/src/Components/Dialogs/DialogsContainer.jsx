import { connect } from 'react-redux'
import Dialogs from './Dialogs'

// const DialogsContainer = (props) => {
//     // debugger

//     return <StoreContext.Consumer>
//         {store => {
//             let state = store.getState()

//             return (
//                 <Dialogs
//                     // store={props.store}
//                     dialogData={state.messagesPage.dialogData}
//                     messageData={state.messagesPage.messageData}
//                     newMessageBody={state.messagesPage.newMessageBody}
//                     dispatch={store.dispatch} />)

//         }
//         }
//     </StoreContext.Consumer>
// }

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