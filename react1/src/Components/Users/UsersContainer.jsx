import { nativeTouchData } from 'react-dom/test-utils'
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUserCountAC } from '../../Redux/users-reducer'
import Users from './Users'

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer