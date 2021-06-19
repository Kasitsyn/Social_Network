import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='http://www.famima.vn/wp-content/uploads/2020/03/baner-web-01-1600x612.png' />
            </div>
            <div>
                <img src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-7-avatar-2754582_120519.png' />
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}
export default Profile;