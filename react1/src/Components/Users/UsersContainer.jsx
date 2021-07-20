import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCountAC } from '../../Redux/users-reducer'
import Users from './Users'
import * as axios from 'axios'
import React from 'react'

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
            //debugger
        })
    }

    onPageChanged(pageNumber) {
        //debugger
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            
        })

    }

    render() {
        return <Users
            totalUsersCount={ this.props.totalUsersCount}
            pageSize={ this.props.pageSize}
            currentPage={this.props.currentPage}
            users={ this.props.users}
            follow={ this.props.follow}
            unfollow={ this.props.unfollow}
            onPageChanged={this.onPageChanged.bind(this)} />

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage


    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUserCount: (totalUsersCount) => dispatch(setTotalUserCountAC(totalUsersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
