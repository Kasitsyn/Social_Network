import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogData={props.state.dialogData} />
            <MessagesItem messageData={props.state.messageData} />
        </div>
    )
}

export default Dialogs