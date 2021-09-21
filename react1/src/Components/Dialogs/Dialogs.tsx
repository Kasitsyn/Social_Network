import s from './Dialogs.module.css'
import DialogsItem from './DialogItem/DialogsItem'
import Message from './MessagesItem/Message'
import { InitialStateType } from '../../Redux/dialogs-reducer'
import AddMesageForm from './AddMessageForm/AddMesageForm'

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageTxt: string) => void
}

export type NewMessageFormValuesType= {
    newMessageBody:string
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage

    let dialogElements = state.dialogData.map(d => <DialogsItem id={d.id} key={d.id} name={d.name} />)
    let messageElements = state.messageData.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMesageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export default Dialogs