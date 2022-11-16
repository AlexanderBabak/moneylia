import { configureStore } from '@reduxjs/toolkit';
import paymentsReducer from '../redux/slices/paymentsSlice';
import userReducer from '../redux/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    payments: paymentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
