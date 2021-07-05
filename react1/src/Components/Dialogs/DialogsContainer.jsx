// import s from './Dialogs.module.css'
// import DialogsItem from './DialogItem/DialogsItem'
// import MessagesItem from './MessagesItem/MessagesItem'
import Dialogs from './Dialogs'
import StoreContext from '../../storeContext'

const DialogsContainer = (props) => {
    // debugger

    return (
        <StoreContext.Consumer> {
            (store) => {
                let state = props.store.getState()

                return (
                    <Dialogs
                        // store={props.store}
                        dialogData={state.messagesPage.dialogData}
                        messageData={state.messagesPage.messageData}
                        newMessageBody={state.messagesPage.newMessageBody}
                        dispatch={props.store.dispatch} />)

            }
        }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer