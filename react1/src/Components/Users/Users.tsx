import React from 'react'
import { UserType } from '../../types/types'
import Paginator from '../common/Paginator/Paginator'
import User from './User'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    // toggleIsFollowInProgress: any
    isFetching: boolean
    onPageChanged: (pageNumber: number) => void
    followInProgress: Array<number>
    users: Array<UserType>
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
   
}

const Users: React.FC<PropsType> = (props) => {

    let disabledFunc = (user: any) => {

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