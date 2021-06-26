import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    debugger
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.state.postData} addPost={props.addPost}/>
        </div>
    );
}
export default Profile;
