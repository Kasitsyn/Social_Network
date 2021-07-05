import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostContainer';

const Profile = (props) => {
    // debugger
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                //store={props.store}
                // postData={props.profilePage.postData}
                // dispatch={props.dispatch}
                // newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}
export default Profile;
