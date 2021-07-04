// import s from './Dialogs.module.css'
// import DialogsItem from './DialogItem/DialogsItem'
// import MessagesItem from './MessagesItem/MessagesItem'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    // debugger

    let state = props.store.getState()

    return (<Dialogs
        // store={props.store}
        dialogData={state.messagesPage.dialogData}
        messageData={state.messagesPage.messageData}
        newMessageBody={state.messagesPage.newMessageBody}
        dispatch={props.store.dispatch} />
        // <div className={s.dialogs}>
        //     <DialogsItem dialogData={props.messagesPage.dialogData} />
        //     <MessagesItem
        //         messageData={props.messagesPage.messageData}
        //         newMessageBody={props.messagesPage.newMessageBody}
        //         dispatch={props.dispatch}
        //     />
        // </div>
    )
}

export default DialogsContainer