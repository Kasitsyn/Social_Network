import { actions, followThunk, InitialStateType, unFollowThunk } from "./users-reducer";
import usersReducer from './users-reducer';
import { usersAPI } from "../api/users-api";
import { ApiResponseType, ResultCodeEnum } from "../api/api";


let state: InitialStateType
jest.mock("../api/users-api")
const dispatchMock = jest.fn()
const getStateMock = jest.fn()
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>



beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: "me0",
                photos: {
                    "small": null,
                    "large": null
                },
                status: "status 0",
                followed: false
            },
            {
                id: 1,
                name: "me1",
                photos: {
                    "small": null,
                    "large": null
                },
                status: "status 1",
                followed: false
            },
            {
                id: 2,
                name: "me2",
                photos: {
                    "small": null,
                    "large": null
                },
                status: "status 2",
                followed: true
            },
            {
                id: 3,
                name: "me3",
                photos: {
                    "small": null,
                    "large": null
                },
                status: "status 3",
                followed: true
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        maxUsers: 50,
        isFetching: false,
        followInProgress: [] // array of userId
    }

    dispatchMock.mockClear();
    getStateMock.mockClear();
    usersAPIMock.toFollow.mockClear();
    usersAPIMock.unFollow.mockClear();
})

const result: ApiResponseType = {
    resultCode: 0,
    messages: [],
    data: {}
}

test('success follow', () => {



    const newState = usersReducer(state, actions.follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()

})

test('success unfollow', () => {



    const newState = usersReducer(state, actions.unfollow(3))

    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()

})

test('succes toFollow thunk', async () => {

    
    usersAPIMock.toFollow.mockReturnValue(Promise.resolve(result))
    const thunk = followThunk(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowInProgress(false, 1))

    


})

test('succes unFollow thunk', async () => {

    
    usersAPIMock.unFollow.mockReturnValue(Promise.resolve(result))
    const thunk = unFollowThunk(1)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowInProgress(false, 1))

    


})
