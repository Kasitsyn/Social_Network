import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = (props) => {
    debugger
    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
<<<<<<< HEAD
=======
        debugger
>>>>>>> 3036694de446d207ca635a69e9a3a47e5964468c
    }

    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea ref={newPostElement} name="" cols="50" rows="5">asdasdasdadsa</textarea>
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