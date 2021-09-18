import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';
import { usersAPI } from '../api/users-api';
import { UserType } from '../types/types';
import { AppStateType, InferActionTypes } from './redux-store';

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    maxUsers: 50,
    isFetching: true,
    followInProgress: [] as Array<number> // array of userId
}

type InitialStateType = typeof initialState

// const FOLLOW = 'FOLLOW'
// const UNFOLLOW = 'UNFOLLOW'
// const SET_USERS = 'SET_USERS'
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
// const TOGGLE_IS_FOLLOW_IN_PROGRESS = 'TOGGLE_IS_FOLLOW_IN_PROGRESS'

//                                      Actions Creator's Types

// type FollowACType = {
//     type: typeof FOLLOW
//     userId: number
// }

// type UnfollowACType = {
//     type: typeof UNFOLLOW
//     userId: number
// }

// type SetUsersType = {
//     type: typeof SET_USERS
//     users: UserType[]
// }

// type SetCurrentPageType = {
//     type: typeof SET_CURRENT_PAGE
//     currentPage: number
// }

// type SetTotalUserCountType = {
//     type: typeof SET_TOTAL_USER_COUNT
//     totalUsersCount: number
// }

// type ToggleIsFetchingType = {
//     type: typeof TOGGLE_IS_FETCHING
//     isFetching: boolean
// }

// type ToggleIsFollowInProgressType = {
//     type: typeof TOGGLE_IS_FOLLOW_IN_PROGRESS
//     isFollowing: boolean
//     userId: number
// }

// type ActionsTypes =
//     SetUsersType | FollowACType | UnfollowACType | UnfollowACType | SetCurrentPageType |
//     SetTotalUserCountType | ToggleIsFetchingType | ToggleIsFollowInProgressType

export const actions = {
    follow: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollow: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: UserType[]) => ({ type: 'SET_USERS', users } as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
    setTotalUserCount: (totalUsersCount: number) => ({ type: 'SET_TOTAL_USER_COUNT', totalUsersCount } as const),
    toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
    toggleIsFollowInProgress: (isFollowing: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOW_IN_PROGRESS', isFollowing, userId } as const)
      
}

type ActionsTypes = InferActionTypes<typeof actions>


//                                          Action Creators



// export const follow = (userId: number): FollowACType => ({ type: FOLLOW, userId })
// export const unfollow = (userId: number): UnfollowACType => ({ type: UNFOLLOW, userId })
// export const setUsers = (users: UserType[]): SetUsersType => ({ type: SET_USERS, users })
// export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
// export const setTotalUserCount = (totalUsersCount: number): SetTotalUserCountType => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount })
// export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
// export const toggleIsFollowInProgress = (isFollowing: boolean, userId: number): ToggleIsFollowInProgressType => ({ type: TOGGLE_IS_FOLLOW_IN_PROGRESS, isFollowing, userId })


//                                      Reducer


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: true }
                    return user
                })

            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) return { ...user, followed: false }
                    return user
                })

            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USER_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOW_IN_PROGRESS':
            return {
                ...state,
                followInProgress: action.isFollowing
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//                                      Thunks

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionsTypes>, getState: () => AppStateType) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUserCount(data.totalCount))
}

let _followUnfollowFlow = async (apiMethod: any, actionCreator: (userId: number) => ActionsTypes, userId: number, dispatch: Dispatch<ActionsTypes>) => {
    dispatch(actions.toggleIsFollowInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(actions.toggleIsFollowInProgress(false, userId))
}

export const unFollowThunk = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(usersAPI.unFollow.bind(usersAPI), actions.unfollow, userId, dispatch)
}

export const followThunk = (userId: number): ThunkType => async (dispatch: any) => {
    _followUnfollowFlow(usersAPI.toFollow.bind(usersAPI), actions.follow, userId, dispatch)
}

export default usersReducer