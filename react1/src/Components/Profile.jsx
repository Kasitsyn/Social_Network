import s from './Profile.module.css'
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
                My POSTS
                <div>
                    New Post
                    <div className={s.posts}>
                        <div className={s.item}>
                            post 1
                        </div>
                        <div className={s.item}>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;