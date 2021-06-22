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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id='1' name='Алексей' />
                <DialogItem id='2' name='Олег' />
                <DialogItem id='3' name='Игнат' />
                <DialogItem id='4' name='Ольга' />
            </div>
            <div className={s.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='Thanks for IT!' />
            </div>
        </div>
    )

}

export default Dialogs