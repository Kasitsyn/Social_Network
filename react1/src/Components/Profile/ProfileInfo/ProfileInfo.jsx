import ProfileDataForm, { } from './ProfileDataForm';
import Preloader from "../../common/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import banner from "../../../assets/images/banner.png"
import ProfileStatusHooks from './ProfileStatus/ProfileStatusHooks';
import userPhoto from '../../../assets/images/Avatar.png'
import { useState } from 'react';



const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <div>
            <Preloader />
        </div>

    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false)
        })

    }

    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <img src={banner} alt="banner" />
            </div>
            <div className={s.photoLarge}>
                <img src={props.profile.photos.large || userPhoto} alt="" />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>

            {editMode
                ? <ProfileDataForm initialValues={props.profile} isOwner={props.isOwner} profile={props.profile} onSubmit={onSubmit} />
                : <ProfileData goToEditMode={() => setEditMode(true)} isOwner={props.isOwner} profile={props.profile} />}

            <div>
                <ProfileStatusHooks
                    status={props.status}
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return <div>

        {
            props.isOwner &&
            <div>
                <button onClick={props.goToEditMode}>
                    edit
                </button>
            </div>
        }

        <div>
            <b>Full name:</b> {props.profile.fullName}
        </div>
        <div>
            <b>looking for a job:</b> {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {
            props.profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {props.profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={s.contact}><Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} /></div>
            })}
        </div>
    </div>
}


export const Contact = ({ contactTitle, contactValue }) => {
    return <div>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}
export default ProfileInfo;