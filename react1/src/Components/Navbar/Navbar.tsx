import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

type PropsType = {
    
}


const Navbar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;