import { connect } from 'react-redux'
import { compose } from 'redux'
import {
    getUsers,
    unFollowThunk,
    followThunk,
    FilterType
} from '../../Redux/users-reducer'
import Users from './Users'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import {
    getAllUsers,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getIsFetching,
    getFollowInProgress,
    getUserFilter
} from '../../Redux/users-selectors';
import { UserType } from '../../types/types'
import { AppStateType } from '../../Redux/redux-store'

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followInProgress: Array<number>
    filter: FilterType

}

type MapDispatchPropsType = {
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void


}

type OwnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    onPageChanged(pageNumber: number) {
        
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter )

    }

    onFilterChanged(filter: FilterType) {
        this.props.getUsers(1, this.props.pageSize, filter)
    }

    render() {
        return <>
            <h2>{this.props.pageTitle}</h2>
            {this.props.isFetching
                ? <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged.bind(this)}
                    followInProgress={this.props.followInProgress}
                    unFollowThunk={this.props.unFollowThunk}
                    followThunk={this.props.followThunk}
                    isFetching={this.props.isFetching}
                    onFilterChanged={this.onFilterChanged.bind(this)} />}



        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getAllUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state),
        filter: getUserFilter(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
        (mapStateToProps, {
            unFollowThunk,
            followThunk,
            getUsers,
        })
)(UsersContainer)
