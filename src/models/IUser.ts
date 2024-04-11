export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IGetUsersResponse {
  data: IUser[] | IUser | null;
  isLoading: boolean;
  error: string;
}

export interface GetUsersParams {
  page: number;
  per_page?: number;
}
