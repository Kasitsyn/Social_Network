import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://freepikpsd.com/media/2019/10/avatar-png-icon-2-Transparent-Images.png" alt="avatar" />
            {props.message}

            <p className={s.likes}>{props.likesCount} Likes</p>
        </div>
    );
}
export default Post;