import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postData={props.profilePage.postData}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText} />
        </div>
    );
}
export default Profile;
