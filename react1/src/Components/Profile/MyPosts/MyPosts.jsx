import s from './MyPosts.module.css'
import Post from './Post/Post'





const MyPosts = () => {

    let postData = [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post!", likesCount: 23 }
    ]

    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className='s.postsBlock'>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea name="" id="" cols="50" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
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