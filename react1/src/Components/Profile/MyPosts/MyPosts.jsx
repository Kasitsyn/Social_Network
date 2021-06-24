import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let addPost = () => {
        alert("HEY!")
    }

    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea name="" id="" cols="50" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                <h3>My posts</h3>
                <div className={s.posts}>
                    {postsElements}

                </div>
            </div>

        </div>
    );
}
export default MyPosts;