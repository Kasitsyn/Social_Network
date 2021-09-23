import React from 'react'
import { Field } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import AddPostForm, { AddPostFormValuesType } from '../AddPortForm/AddPostForm';
import { PostDataType } from '../../../types/types';

type PropsType = {
    posts: Array<PostDataType>
    addPost: (newPosttext: string) => void
}


const MyPosts: React.FC<PropsType> = (props) => {
    console.log("my post")
    console.log(props)
    let postsElements = [...props.posts].reverse().map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)

    }

    return (

        <div className={s.postsBlock}>
            <div>
                <h3>New post</h3>
                <AddPostForm onSubmit={onAddPost} />
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

const MyPostMemorized = React.memo(MyPosts)

export default MyPostMemorized;