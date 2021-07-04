import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
//debugger
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogData={props.messagesPage.dialogData} />
            <MessagesItem
                messageData={props.messagesPage.messageData}
                newMessageBody={props.messagesPage.newMessageBody}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialogs