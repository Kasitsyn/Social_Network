import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
const Header = (props) => {
    //debugger
    return (
        <header className={s.header}>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-acrylic-splash.png' />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
                
            </div>
        </header>
        
    );
    
}
export default Header;