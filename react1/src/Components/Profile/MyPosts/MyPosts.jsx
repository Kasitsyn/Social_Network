import React from 'react'
import { Field } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form';

const MyPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="what's new?" name='newPostText' component={'textarea'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPosts = (props) => {
    // debugger
    let newPostElement = React.createRef()

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
        //alert(values.newPostText)
    }

    // let onPostOnChange = () => {
    //     let text = newPostElement.current.value
    //     props.postOnChange(text)
    // }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <MyPostReduxForm onSubmit={onAddPost} />
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

let MyPostReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(MyPostForm)

export default MyPosts;