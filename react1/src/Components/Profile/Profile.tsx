import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { ProfileType } from '../../types/types';

type PropsType = {
    isAuth: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
    updateStatus: (status: string) => void
    status: string
    profile: ProfileType | null
    isOwner: boolean
}

const Profile: React.FC<PropsType> = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile} />
            <MyPostsContainer />
        </div >
    )
}

export default Profile;
