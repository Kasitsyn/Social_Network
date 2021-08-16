import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import s from "./ProfileInfo.module.css"
import banner from "../../../assets/images/banner.png"
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>
            <Preloader />
        </div>

    }

    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <img src={banner} alt="banner" />
            </div>
            <div className={s.photoLarge}>
                <img src={props.profile.photos.large} alt="" />
            </div>
            <div>
                <ProfileStatusHooks
                    status={props.status}
                    updateStatus={props.updateStatus} />
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