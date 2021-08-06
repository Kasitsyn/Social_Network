import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'


const Dialogs = (props) => {
    
    return (
        <div className={s.dialogs}>
            <DialogsItem 
                dialogData={props.dialogData} />
            <MessagesItem
                messageData={props.messageData}
                //newMessageBody={props.newMessageBody}
                sendMessage={props.sendMessage}
            />
        </div>
    )
}

export default Dialogs