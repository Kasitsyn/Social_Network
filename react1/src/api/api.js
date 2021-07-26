import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552"}

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers: { "API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552" } })

    toFollow(userId) {
        return instance.post(`follow/${userId}`)
    }

    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true, headers: { "API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552" } })
} 

