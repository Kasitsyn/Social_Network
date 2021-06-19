import s from './MyPosts.module.css'
const MyPosts = () => {
    return (
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
    );
}
export default MyPosts;