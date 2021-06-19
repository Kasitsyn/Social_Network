import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            My POSTS
            <div>
                New Post
                <div className={s.posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}
export default MyPosts;