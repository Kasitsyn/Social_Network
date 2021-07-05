import React from 'react'
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import StoreContext from '../../../StoreContext'

const MyPosts = (props) => {
    // debugger
    let newPostElement = React.createRef()

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostOnChange = () => {
        let text = newPostElement.current.value
        props.postOnChange(text)
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea ref={newPostElement} placeholder="what's new?" onChange={onPostOnChange} name="" cols="50" rows="5" value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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