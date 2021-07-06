import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {
//     return <StoreContext.Consumer>
//         {store => {

//             let state = store.getState()
//             let addPost = () => {
//                 store.dispatch(addPostActionCreator())
//             }

//             let postOnChange = (text) => {
//                 store.dispatch(updateNewPostTextActionCreator(text))
//             }

//             return <MyPosts
//                 addPost={addPost}
//                 postOnChange={postOnChange}
//                 posts={state.profilePage.postData}
//                 newPostText={state.profilePage.newPostText} />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        postOnChange: (text) => dispatch(updateNewPostTextActionCreator(text))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer