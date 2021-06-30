import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
    
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let postOnChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text)) 
        console.log(props)   
    }

    let postsElements = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <div>
                    <textarea ref={newPostElement} onChange={postOnChange} name="" cols="50" rows="5" value={props.newPostText}></textarea>
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