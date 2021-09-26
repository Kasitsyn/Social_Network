import UsersSearchForm, { } from './UsersSearchForm';
import React from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import { FilterType, followThunk, getUsers } from '../../Redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getCurrentPage, getFollowInProgress, getPageSize, getTotalUsersCount, getUserFilter } from './../../Redux/users-selectors';
import { unFollowThunk } from './../../Redux/users-reducer';
import { useEffect } from 'react';


type PropsType = {
    

}

export const Users: React.FC<PropsType> = (props) => {



    const users = useSelector(getAllUsers)
    const pageSize = useSelector(getPageSize)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const followInProgress = useSelector(getFollowInProgress)
    const filter = useSelector(getUserFilter)

    const dispatch = useDispatch()

    useEffect(() => { dispatch(getUsers(currentPage, pageSize, filter)) }, [currentPage, dispatch, filter, pageSize])

    const onPageChanged = (pageNumber: number) => dispatch(getUsers(pageNumber, pageSize, filter))
    const onFilterChanged = (filter: FilterType) => dispatch(getUsers(1, pageSize, filter))
    const follow = (userId: number) => dispatch(followThunk(userId))
    const unFollow = (userId: number) => dispatch(unFollowThunk(userId))

    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged} />
        <Paginator
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
        />

        {
            users.map(u => <User
                user={u}
                unFollowThunk={follow}
                followThunk={unFollow}
                key={u.id}
                followInProgress={followInProgress} />
            )
        }
    </div>
}





