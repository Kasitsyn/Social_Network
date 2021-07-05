// import s from './Dialogs.module.css'
// import DialogsItem from './DialogItem/DialogsItem'
// import MessagesItem from './MessagesItem/MessagesItem'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = (props) => {
    // debugger

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState()

            return (
                <Dialogs
                    // store={props.store}
                    dialogData={state.messagesPage.dialogData}
                    messageData={state.messagesPage.messageData}
                    newMessageBody={state.messagesPage.newMessageBody}
                    dispatch={store.dispatch} />)

        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer