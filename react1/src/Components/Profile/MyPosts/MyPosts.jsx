import React from 'react'
import { Field } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from './../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="what's new?" name='newPostText' component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPosts = React.memo(props => {
    console.log("my post")
    console.log(props)
    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)

    }

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

})

let MyPostReduxForm = reduxForm({ form: 'dialogsAddMessageForm' })(MyPostForm)

export default MyPosts;