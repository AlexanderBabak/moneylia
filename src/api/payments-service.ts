import { get } from './baseRequest';

export const getPayments = () => get('payments');

export const getPaymentById = (paymentId: string) =>
  get(`payments/${paymentId}`);
