import { connect } from 'react-redux'
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowInProgress,
    getUsers,
    unFollowThunk,
    followThunk
} from '../../Redux/users-reducer'
import Users from './Users'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber) {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>

            {this.props.isFetching
                ? <Preloader />
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged.bind(this)}
                    isFetching={this.props.isFetching}
                    followInProgress={this.props.followInProgress}
                    toggleIsFollowInProgress={this.props.toggleIsFollowInProgress}
                    unFollowThunk={this.props.unFollowThunk}
                    followThunk={this.props.followThunk} />}


        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress


    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleIsFollowInProgress,
    getUsers,
    unFollowThunk,
    followThunk
})(UsersContainer)
