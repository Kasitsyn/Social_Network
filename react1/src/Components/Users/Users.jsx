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


                // return <div key={user.id}>
                //     <span>
                //         <div className={style.item}>
                //             <NavLink to={'/profile/' + user.id}>
                //                 <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                //             </NavLink>

                //         </div>
                //         <div>
                //             {
                //                 user.followed
                //                     ? <button disabled={disabledFunc(user)} onClick={() => props.unFollowThunk(user.id)}>
                //                         UNFOLLOW
                //                     </button>

                //                     : <button disabled={disabledFunc(user)} onClick={() => props.followThunk(user.id)}>
                //                         FOLLOW
                //                     </button>
                //             }
                //         </div>
                //     </span>
                //     <span>
                //         <span>
                //             <div>{user.name}</div>
                //             <div>{user.status}</div>
                //         </span>
                //         <span>
                //             <div>{'user.location.country'}</div>
                //             <div>{'user.location.city'}</div>
                //         </span>
                //     </span>
                // </div>

            )
        }
    </div>
}

export default Users;