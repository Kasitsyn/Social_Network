import React from 'react'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'



const User = (props) => {

    return <div key={props.key}>
        <span>
            <div className={style.item}>
                <NavLink to={'/profile/' + props.user.id}>
                    <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt="avatar" />
                </NavLink>

            </div>
            <div>
                {
                    props.user.followed
                        ? <button disabled={props.disabledFunc(props.user)} onClick={() => props.unFollowThunk(props.user.id)}>
                            UNFOLLOW
                        </button>

                        : <button disabled={props.disabledFunc(props.user)} onClick={() => props.followThunk(props.user.id)}>
                            FOLLOW
                        </button>
                }
            </div>
        </span>
        <span>
            <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </span>
    </div>
}

export default User;