import axios from "axios"
import { ProfileType } from "../types/types"


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

    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    toFollow(userId: number) {
        return instance.post(`follow/${userId}`)
    },

    setUser(userId: number) {
        console.warn('obsolete method. Please use profileAPI object')
        return profileAPI.setUser(userId)
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {id: number, email: string, login: string}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodeEnum
    messages: Array<string>
} 

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {

        return instance.post<LoginResponseType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data)
    },

    logout() {

        return instance.delete(`auth/login`)
    }

}

export const profileAPI = {
    setUser(userId: number) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status: string) {
        return instance.put('profile/status', { status })
    },

    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData)
    },

    saveProfile(profile: ProfileType) {
        return instance.put('profile', profile)
    }

}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }

}




