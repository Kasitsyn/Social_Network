import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';
import React from 'react';
import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div >
    )
}

export default Profile;
