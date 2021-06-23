import s from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const MessagesItem = (props) => {

    let messageElements = props.messageData.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )

}

export default MessagesItem 