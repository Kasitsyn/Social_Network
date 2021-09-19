import { PhotosType, ProfileType } from "../types/types"
import { instance, ApiResponseType } from "./api"

export type SavePhotosResponseDataType = {
    photos: PhotosType
}

export const profileAPI = {
  setUser(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then(res=>res.data)
  },

  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then(res=>res.data)
  },

  updateStatus(status: string) {
    return instance.put<ApiResponseType>('profile/status', {status}).then(res=>res.data)
  },

  savePhoto(photoFile: any) {
    const formData = new FormData()
    formData.append('image', photoFile)
    return instance.put<ApiResponseType<SavePhotosResponseDataType>>('profile/photo', formData).then(res=>res.data)
  },

  saveProfile(profile: ProfileType) {
    return instance.put<ApiResponseType>('profile', profile).then(res=>res.data)
  }

}
  