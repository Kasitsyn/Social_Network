import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogsItem = (props) => {

    const DialogItem = (props) => {
        return (
            <div className={s.dialog}>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
            </div>
        )
    }

    let dialogElements = props.dialogData.map(d => <DialogItem id={d.id} key={d.id} name={d.name} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div>
                
            </div>
        </div>
    )

}

export default DialogsItem