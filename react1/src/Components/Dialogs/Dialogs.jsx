import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
    // debugger
    // let state = props.store.getState()
    return (
        <div className={s.dialogs}>
            <DialogsItem 
                dialogData={props.dialogData} />
            <MessagesItem
                messageData={props.messageData}
                newMessageBody={props.newMessageBody}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialogs