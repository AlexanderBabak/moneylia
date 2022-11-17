import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPayments, getPaymentById } from '../../api/payments-service';
import { Payment } from '../../interfaces/payment-interface';

export const getPaymentsThunk = createAsyncThunk('payments', async () => {
  const response = await getPayments();
  return response;
});

export const fetchPaymentById = async (paymentId: string): Promise<Payment> => {
  const response = await getPaymentById(paymentId);
  try {
    return response;
  } catch (e: any) {
    throw new Error(e);
  }
};
