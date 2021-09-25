import { createSelector } from "reselect"
import { AppStateType } from "./redux-store"

const getAllUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}

export const getAllUsers = createSelector(getAllUsersSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowInProgress = (state: AppStateType) => {
    return state.usersPage.followInProgress
}

export const getUserFilter = (state: AppStateType) => {
    return state.usersPage.filter
}





