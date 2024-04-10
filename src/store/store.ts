import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '@store/slices/auth/auth';

const rootReducer = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
