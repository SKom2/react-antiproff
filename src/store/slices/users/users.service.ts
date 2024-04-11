import axiosClassic from '@api/axios';
import { GetUsersParams, IGetUsersResponse } from '@models/IUser';

const usersService = {
  async getUsers(params: GetUsersParams) {
    return axiosClassic.get<IGetUsersResponse>('/users', {
      params,
    });
  },

  async getUser(id: number) {
    return axiosClassic.get<IGetUsersResponse>(`/users/${id}`);
  },
};

export default usersService;
