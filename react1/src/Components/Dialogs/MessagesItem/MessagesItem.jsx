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
                <div>{messageElements}</div>
            </div>
            <div>
                <textarea placeholder='enter your message'></textarea>
            </div>
            <div>
                <button onClick>Send</button>
            </div>
            <div></div>
        </div>
    )

}

export default MessagesItem 