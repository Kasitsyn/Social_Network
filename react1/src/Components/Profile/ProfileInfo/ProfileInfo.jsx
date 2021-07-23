import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
const ProfileInfo = (props) => {
    //debugger
    if (!props.profile) {
        return <div>
            <Preloader />
        </div>

    }

    return (
        <div className={s.wrapper}>
            <div>
                <img src='https://res.cloudinary.com/omaha-code/image/upload/ar_4:3,c_fill,dpr_1.0,e_art:quartz,g_auto,h_396,q_auto:best,t_Linkedin_official,w_1584/v1561576558/mountains-1412683_1280.png' />
            </div>
            <div className={s.photoLarge}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div>
                <p>полное имя: {props.profile.fullName}</p>
                <p>обо мне: {props.profile.aboutMe}</p>
                <p>мой ВК: {props.profile.vk}</p>
                <p>поиск работы: {props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    );
}
export default ProfileInfo;