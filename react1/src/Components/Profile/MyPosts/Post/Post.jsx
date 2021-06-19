import s from './Post.module.css'
const Post = (props) => {
    return (
        <div className={s.item}>
            {props.message}
            <p>{props.likesCount} Likes</p> 
        </div>
    );
}
export default Post;