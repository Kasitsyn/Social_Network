import preloader from '../../../assets/images/Preloader.svg'
import style from './Preloader.module.css'
const Preloader = (props) => {
    return <div >
        <div className={style.preloader}>
            <img src={preloader} alt="" />
        </div>

    </div>
}

export default Preloader