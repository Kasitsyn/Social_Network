import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';
import React from 'react';
class ProfileContainer extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo />
                <MyPostsContainer />
            </div >
        )
    }
}
export default ProfileContainer;
