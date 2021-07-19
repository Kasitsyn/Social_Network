import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/Avatar.png'
import style from './Users.module.css'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

        })
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)

        })

    }    

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }



        //debugger
        return <div>
            <div>
                {pages.map((page) => {
                   return <span className={this.props.currentPage === page && style.selectedPage}
                        onClick={() => this.onPageChanged(page)}>{page}</span>
                })}
            </div>

            {
                this.props.users.map(user => {
                    return <div key={user.id}>
                        <span>
                            <div className={s.item}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
                            </div>
                            <div>
                                {
                                    user.followed
                                        ? <button onClick={() => this.props.unfollow(user.id)}>FOLLOW</button>
                                        : <button onClick={() => this.props.follow(user.id)}>UNFOLLOW</button>
                                }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{'user.location.country'}</div>
                                <div>{'user.location.city'}</div>
                            </span>
                        </span>
                    </div>

                })

            }
        </div >
    }
}

export default Users;