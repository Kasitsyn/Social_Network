import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import DialogsItem from './DialogItem/DialogsItem'
import MessagesItem from './MessagesItem/MessagesItem'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItem dialogData={props.dialogData} />
            <MessagesItem messageData={props.messageData} />
        </div>
    )
}

export default Dialogs