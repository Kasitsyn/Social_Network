import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'
import { DialogType, MessageDataType } from '../../Redux/dialogs-reducer'

type PropsType = {
    dialogData: Array<DialogType>
    messageData: Array<MessageDataType>
    sendMessage: (messageTxt: string) => void
}

const Dialogs: React.FC<PropsType>  = (props) => {
    
    return (
        <div className={s.dialogs}>
            <DialogsItem 
                dialogData={props.dialogData} />
            <MessagesItem
                messageData={props.messageData}
                sendMessage={props.sendMessage}
            />
        </div>
    )
}

export default Dialogs