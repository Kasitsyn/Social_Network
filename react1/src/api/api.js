import * as axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "aa2945f8-b306-4e51-832d-5c21993e3552" }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    toFollow(userId) {
        return instance.post(`follow/${userId}`)
    },

    setUser(userId) {
        console.warn('obsolete method. Please use profileAPI object')
        return profileAPI.setUser(userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        
        return instance.post(`auth/login`, { email, password, rememberMe })
    },

    logout() {
       
        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    setUser(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put('profile/status', { status })
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile )
        return instance.put('profile/photo', formData)
    },

    saveProfile(profile) {
        return instance.put('profile', profile)
    }

}


