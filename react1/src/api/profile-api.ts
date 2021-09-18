import { ProfileType } from "../types/types";
import { instance } from "./api";

export const profileAPI = {
  setUser(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then(res=>res.data);
  },

  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },

  updateStatus(status: string) {
    return instance.put('profile/status', {
      status
    });
  },

  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put('profile/photo', formData);
  },

  saveProfile(profile: ProfileType) {
    return instance.put('profile', profile);
  }

};
  