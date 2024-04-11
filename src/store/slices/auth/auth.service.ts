import { AuthFormData, IAuthResponse } from '@store/slices/auth/auth.types';
import axiosClassic from '@api/axios';

const authService = {
  async register(data: AuthFormData) {
    return axiosClassic.post<IAuthResponse>('/register', data);
  },

  async login(data: AuthFormData) {
    return axiosClassic.post<IAuthResponse>('/login', data);
  },

  async logout() {
    return axiosClassic.post('/logout');
  },
};

export default authService;
