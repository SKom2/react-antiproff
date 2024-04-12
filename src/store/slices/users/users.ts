import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import usersService from '@store/slices/users/users.service';
import { GetUsersParams, IGetUsersResponse } from '@models/IUser';

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
  async (params: GetUsersParams, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await usersService.getUsers(params);

      return fulfillWithValue(response);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  'users/getUser',
  async (userId: number, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await usersService.getUser(userId);
      return fulfillWithValue(response);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState: IGetUsersResponse = {
  data: null,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersThunk.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data,
          error: '',
        };
      })
      .addCase(getUsersThunk.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload.response.data.error,
        };
      })
      .addCase(getUserThunk.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          data: action.payload.data.data,
          error: '',
        };
      })
      .addCase(getUserThunk.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload.response.data.error,
        };
      });
  },
});

export const userReducer = userSlice.reducer;
