import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { ProfileType } from '../../types/types';
import { profile } from 'console';
import { saveProfile, setUserProfileThunk, updateStatus } from '../../Redux/profile-reducer';
import { getStatus, savePhoto } from './../../Redux/profile-reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../Redux/redux-store';


type PropsType = {

}

const Profile: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()

    
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const profile = useSelector((state: AppStateType) => state.profilePage.profile)
    const status = useSelector((state: AppStateType) => state.profilePage.status)
    const isOwner = useParams()

    const setUserProfileThunkDispatch = (userId: number) => dispatch(setUserProfileThunk(userId))
    const getStatusDispatch = (userId: number) => dispatch(getStatus(userId))
    const updateStatusDispatch = (status: string) => dispatch(updateStatus(status))
    const savePhotoDispatch = (file: File) => dispatch(savePhoto(file))
    const saveProfileDispatch = (profile: ProfileType) => dispatch(saveProfile(profile))

    if (!isAuth) return <Redirect to={'/login'} />
    return (
        <div>
            <ProfileInfo
                isOwner={!isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatusDispatch}
                savePhoto={savePhotoDispatch}
                //@ts-ignore
                saveProfile={saveProfileDispatch} />
            <MyPostsContainer />
        </div >
    )
}

export default Profile;
