import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogData = [
        { id: 1, name: "Алексей" },
        { id: 2, name: "Олег" },
        { id: 3, name: "Игнат" },
        { id: 4, name: "Ольга" }
    ]

    let dialogElements = dialogData.map(d => <DialogItem id={d.id} name={d.name} />)

    let messageData = [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Good luck!!" }
    ]

    let messageElements = messageData.map(m => <Message message={m.message} />)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}

            </div>
            <div className={s.messages}>
                {messageElements}

            </div>
        </div>
    )

}

export default Dialogs