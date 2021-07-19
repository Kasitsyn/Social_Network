import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/Avatar.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return <div>
            {
                this.props.users.map(user => {
                    return <div key={user.id}>
                        <span>
                            <div className={s.item}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => this.props.unfollow(user.id)}>FOLLOW</button>
                                        : <button onClick={() => this.props.follow(user.id)}>UNFOLLOW</button>
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
}

export default Users;