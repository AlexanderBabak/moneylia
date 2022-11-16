import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../../api/user-service';

export const getUserThunk = createAsyncThunk('user', async () => {
  const response = await getUser();
  return response;
});
