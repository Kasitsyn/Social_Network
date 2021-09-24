import MyPosts, { DispatchPropsType, MapPropsType } from './MyPosts';
import { connect } from 'react-redux';
import { actions } from '../../../Redux/profile-reducer';
import { AppStateType } from '../../../Redux/redux-store';


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    } as MapPropsType
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreator,
})(MyPosts)

export default MyPostsContainer