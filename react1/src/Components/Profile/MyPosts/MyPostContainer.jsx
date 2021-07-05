import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../storeContext'

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {

            let state = props.store.getState()
            let addPost = () => {
                props.store.dispatch(addPostActionCreator())
            }

            let postOnChange = (text) => {
                props.store.dispatch(updateNewPostTextActionCreator(text))
            }

            return <MyPosts
                addPost={addPost}
                postOnChange={postOnChange}
                posts={state.profilePage.postData}
                newPostText={state.profilePage.newPostText} />
        }
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer