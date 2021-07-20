import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCountAC, toggleIsFetchingAC } from '../../Redux/users-reducer'
import Users from './Users'
import * as axios from 'axios'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
            //debugger
        })
    }

    onPageChanged(pageNumber) {
        //debugger
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })

    }

    render() {
        return <>

            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged.bind(this)}
                    isFetching={this.props.isFetching} />}


        </>

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUserCount: (totalUsersCount) => dispatch(setTotalUserCountAC(totalUsersCount)),
        toggleIsFetching: (isFetching) => dispatch(toggleIsFetchingAC(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
