import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = pagesCount; i > 0; i--) {
        pages.push(i)
        if (pages.length >= 10) break
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
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers: { "API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552" } }).then(response => {
                                            if (response.data.resultCode === 0) props.unfollow(user.id)
                                        })
                                        // debugger
                                    }}>
                                        UNFOLLOW
                                    </button>

                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true, headers: { "API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552" } }).then(response => {
                                            if (response.data.resultCode === 0) props.follow(user.id)
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