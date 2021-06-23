import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://freepikpsd.com/media/2019/10/avatar-png-icon-2-Transparent-Images.png" alt="avatar" />
            {props.message}
            <p className={s.likes}>{props.likesCount} Likes</p> 
        </div>
    );
}
export default Post;