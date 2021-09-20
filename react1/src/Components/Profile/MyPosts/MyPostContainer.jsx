import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { actions } from './../../../Redux/profile-reducer';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => dispatch(actions.addPostActionCreator(newPostText)),
        postOnChange: (text) => dispatch(actions.updateNewPostTextActionCreator(text))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer