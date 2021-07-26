import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { usersAPI } from './../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = pagesCount; i > 0; i--) {
        pages.push(i)
        if (pages.length >= 10) break
    }

    let disabledFunc = (user) => {

        return props.followInProgress.some(id => id === user.id)
    }

    // debugger
    return <div>
        <div>
            {pages.map((page) => {
                return <span className={props.currentPage === page && style.selectedPage}
                    onClick={(e) => props.onPageChanged(page)}> {page}</span>
            })}
        </div>

        {
            props.users.map(user => {
                return <div key={user.id}>
                    <span>
                        <div className={s.item}>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                            </NavLink>

                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={disabledFunc(user)} onClick={() => {
                                        props.toggleIsFollowInProgress(true, user.id)
                                        usersAPI.unFollow(user.id).then(response => {
                                            if (response.data.resultCode === 0) props.unfollow(user.id)
                                            props.toggleIsFollowInProgress(false, user.id)
                                        })
                                    }}>
                                        UNFOLLOW
                                    </button>

                                    : <button disabled={disabledFunc(user)} onClick={() => {
                                        props.toggleIsFollowInProgress(true, user.id)
                                        usersAPI.toFollow(user.id).then(response => {
                                            if (response.data.resultCode === 0) props.follow(user.id)
                                            props.toggleIsFollowInProgress(false, user.id)
                                        })
                                    }}>
                                        FOLLOW
                                    </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                </div>

            })

        }
    </div >
}

export default Users;