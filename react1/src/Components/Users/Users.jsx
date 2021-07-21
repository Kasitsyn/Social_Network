import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i >= 10) break
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
                                    ? <button onClick={() => props.unfollow(user.id)}>FOLLOW</button>
                                    : <button onClick={() => props.follow(user.id)}>UNFOLLOW</button>
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