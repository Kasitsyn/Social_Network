import preloader from '../../../assets/images/Preloader.svg'
import style from './Preloader.module.css'

type PropsType = {

}

const Preloader: React.FC<PropsType> = (props) => {
    return <div >
        <div className={style.preloader}>
            <img src={preloader} alt="" />
        </div>

    </div>
}

export default Preloader