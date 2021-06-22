import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.activeLink}>Алексей</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={s.activeLink}>Ольга</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={s.activeLink}>Олег</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={s.activeLink}>Артур</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hey!</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Thanks for IT!</div>
            </div>
        </div>
    )

}

export default Dialogs