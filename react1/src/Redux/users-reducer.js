const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: "true",
        //     fullname: "Yura",
        //     location: {
        //         city: "Novosibirsk",
        //         country: "Russia"
        //     },
        //     status: 'bored',
        //     avatar: 'https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png'

        // },

        // {
        //     id: 2,
        //     followed: "true",
        //     fullname: "Alex",
        //     location: {
        //         city: "Boston",
        //         country: "USA"
        //     },
        //     status: 'happy',
        //     avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
        // },

        // {
        //     id: 3,
        //     followed: "true",
        //     fullname: "Boris",
        //     location: {
        //         city: "London",
        //         country: "England"
        //     },
        //     status: 'sad',
        //     avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-366-456318.png'
        // },

        // {
        //     id: 4,
        //     followed: "true",
        //     fullname: "Helga",
        //     location: {
        //         city: "Phuket",
        //         country: "Thai"
        //     },
        //     status: 'angry!!',
        //     avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png'
        // }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    maxUsers: 50,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: true }
                    return user
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: false }
                    return user
                })

            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export default usersReducer