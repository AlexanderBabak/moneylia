import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user-interface';
import { getUserThunk } from './userThunk';

interface IUser {
  user: User | null;
  loadingUser: boolean;
  errorUser: string | undefined;
}

const initialState: IUser = {
  user: null,
  loadingUser: false,
  errorUser: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //getUser
    builder.addCase(getUserThunk.pending, state => {
      state.loadingUser = true;
      state.errorUser = '';
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.loadingUser = false;
      state.user = action.payload;
    });
    builder.addCase(getUserThunk.rejected, (state, action) => {
      state.loadingUser = false;
      state.errorUser = action.error.message;
    });
  },
});

export default userSlice.reducer;
