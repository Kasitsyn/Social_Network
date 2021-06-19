import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            My POSTS
            <div>
                New Post
                <div className={s.posts}>
                    <Post message="Hi, how are you?"/>
                    <Post message="It's my first post"/>
                    
                </div>
            </div>
        </div>
    );
}
export default MyPosts;