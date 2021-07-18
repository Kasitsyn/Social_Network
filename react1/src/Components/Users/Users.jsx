import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/Avatar.png'
const Users = (props) => {
    

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
            debugger
        })

    }
    
    return <div>
        {
            props.users.map(user => {
                return <div key={user.id}>
                    <span>
                        <div className={s.item}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>
                                    : <button onClick={() => props.follow(user.id)}>FOLLOW</button>
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
    </div>


}
export default Users;