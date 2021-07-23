import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';
import React from 'react';

const Profile = (props) => {
    //debugger
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div >
    )
}

export default Profile;
