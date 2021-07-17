import React from 'react'
import s from './Users.module.css'

const Users = (props) => {
    //debugger
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