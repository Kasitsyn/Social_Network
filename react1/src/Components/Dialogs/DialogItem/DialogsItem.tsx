import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}

const DialogsItem: React.FC<PropsType> = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem