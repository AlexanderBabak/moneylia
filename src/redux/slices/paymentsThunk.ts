import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPayments } from '../../api/payments-service';

export const getPaymentsThunk = createAsyncThunk('payments', async () => {
  const response = await getPayments();
  return response;
});
