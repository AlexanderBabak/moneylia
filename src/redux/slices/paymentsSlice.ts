import { createSlice } from '@reduxjs/toolkit';
import { Payment } from '../../interfaces/payment-interface';
import { getPaymentsThunk } from './paymentsThunk';

interface Payments {
  payments: Payment[] | null;
  loadingPayments: boolean;
  errorPayments: string | undefined;
}

const initialState: Payments = {
  payments: null,
  loadingPayments: false,
  errorPayments: '',
};

export const paymentsSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //getPayments
    builder.addCase(getPaymentsThunk.pending, state => {
      state.loadingPayments = true;
      state.errorPayments = '';
    });
    builder.addCase(getPaymentsThunk.fulfilled, (state, action) => {
      state.loadingPayments = false;
      state.payments = action.payload;
    });
    builder.addCase(getPaymentsThunk.rejected, (state, action) => {
      state.loadingPayments = false;
      state.errorPayments = action.error.message;
    });
  },
});

export default paymentsSlice.reducer;
