import { GetItemsType, instance, ApiResponseType } from "./api";



export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
  },

  unFollow(userId: number) {
    return instance.delete<ApiResponseType>(`follow/${userId}`).then(res => res.data);
  },

  toFollow(userId: number) {
    return instance.post<ApiResponseType>(`follow/${userId}`).then(res => res.data);
  },

};
  