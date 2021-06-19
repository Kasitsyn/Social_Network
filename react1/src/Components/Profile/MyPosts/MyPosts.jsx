import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            My POSTS
            <div>
                New Post
                <div className={s.posts}>
                    <Post message="Hi, how are you?" likesCount='0'/>
                    <Post message="It's my first post" likesCount='23'/>
                    
                </div>
            </div>
        </div>
    );
}
export default MyPosts;