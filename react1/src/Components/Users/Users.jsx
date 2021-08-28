import React from 'react'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from '../common/Paginator/Paginator'
import User from './User'



const Users = (props) => {

    let disabledFunc = (user) => {

        return props.followInProgress.some(id => id === user.id)
    }


    return <div>
        <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
        />

        {
            props.users.map(u => <User
                user={u}
                disabledFunc={disabledFunc}
                unFollowThunk={props.unFollowThunk}
                followThunk={props.followThunk}
                key={u.id} />
            )
        }
    </div>
}

export default Users;