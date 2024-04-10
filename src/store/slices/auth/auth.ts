import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthFormData, IAuthResponse } from '@store/slices/auth/auth.types';
import { saveAccessToken } from '@store/slices/auth/auth.helpers';
import authService from '@store/slices/auth/auth.service';

const initialState: IAuthResponse = {
  id: null,
  token: '',
  isLoading: false,
  error: '',
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data: AuthFormData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.register(data);

      if (response) saveAccessToken(response.data.token);

      return fulfillWithValue(response);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (data: AuthFormData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await authService.login(data);

      if (response) saveAccessToken(response.data.token);

      return fulfillWithValue(response);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const authSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          id: action.payload.data.id,
          token: action.payload.data.token,
          error: '',
        };
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload.response.data.error,
        };
      })
      .addCase(loginUser.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          id: action.payload.data.id,
          token: action.payload.data.token,
          error: '',
        };
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        return {
          ...state,
          isLoading: false,
          error: action.payload.response.data.error,
        };
      });
  },
});

export const authReducer = authSlice.reducer;
