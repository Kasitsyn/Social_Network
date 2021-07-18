const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })

let initialState = {
    users: [
        {
            id: 1,
            followed: "true",
            fullname: "Yura",
            location: {
                city: "Novosibirsk",
                country: "Russia"
            },
            status: 'bored',
            avatar: 'https://www.pngarts.com/files/11/Avatar-Free-PNG-Image.png'

        },

        {
            id: 2,
            follow: "true",
            fullname: "Alex",
            location: {
                city: "Boston",
                country: "USA"
            },
            status: 'happy',
            avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png'
        },

        {
            id: 3,
            follow: "true",
            fullname: "Boris",
            location: {
                city: "London",
                country: "England"
            },
            status: 'sad',
            avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-366-456318.png'
        },

        {
            id: 4,
            follow: "true",
            fullname: "Helga",
            location: {
                city: "Phuket",
                country: "Thai"
            },
            status: 'angry!!',
            avatar: 'https://www.pikpng.com/pngl/b/279-2797047_user-avatar-icon-portable-network-graphics-clipart.png'
        }
    ]
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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export default usersReducer