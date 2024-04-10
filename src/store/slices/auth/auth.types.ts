export interface AuthFormData {
  email: string;
  password: string;
}

export interface IAuthResponse {
  id: number | null;
  token: string;
  isLoading: boolean;
  error: string;
}
