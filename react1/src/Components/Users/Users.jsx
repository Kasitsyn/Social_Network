import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
const Users = (props) => {
    //debugger

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })

    }
    return <div>
        {
            props.users.map(user => {
                return <div key={user.id}>
                    <span>
                        <div className={s.item}>
                            <img src={user.avatar} alt="avatar" />
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullname}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>
                    </span>
                </div>

            })

        }
    </div>


}
export default Users;