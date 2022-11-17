import React, { useEffect, useState } from 'react';
import { VStack } from 'native-base';
import { PaymentDatailsItem } from './payment-datails-item';
import { PaymentDetailsNotice } from './payment-details-notice';
import { PaymentDetailsTotal } from './payment-details-total';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/navigation-interfaces';
import { Payment } from '../../interfaces/payment-interface';
import { fetchPaymentById } from '../../redux/slices/paymentsThunk';
import { ErrorView } from '../../components/error/error-view';
import { PaymentLoader } from '../../components/loader/payment-loader';

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentDetails'>;

export const PaymentDetailsScreen: React.FC<Props> = ({ route }) => {
  const [payment, setPayment] = useState<Payment | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { paymentId } = route.params;

  const loadPayment = async (id: string): Promise<Payment> => {
    return await fetchPaymentById(id);
  };

  useEffect(() => {
    setIsLoading(true);
    loadPayment(paymentId)
      .then(data => {
        setPayment(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Oops...Your request is unavailable now...');
        setIsLoading(false);
      });
  }, [paymentId]);

  return (
    <>
      {isLoading && <PaymentLoader />}
      {error && <ErrorView message={error} />}
      {payment && (
        <VStack
          h="100%"
          paddingX={4}
          justifyContent="space-between"
          bgColor="white"
        >
          <VStack>
            <PaymentDetailsNotice />

            <PaymentDatailsItem
              title="Creditor"
              details={[
                payment.address.code,
                payment.address.street,
                payment.address.postCode,
              ]}
            />
            <PaymentDatailsItem
              title="Causal"
              uppercase={true}
              details={[payment.description, payment.expiryDate]}
            />
            <PaymentDatailsItem
              title="Expiry date"
              details={[payment.expiryDate]}
            />
            <PaymentDatailsItem
              title="Creditor tax code"
              details={[payment.taxCode]}
            />
            <PaymentDatailsItem
              title="Notice code"
              details={[payment.noticeCode]}
            />
          </VStack>

          <PaymentDetailsTotal total={payment.sum} />
        </VStack>
      )}
    </>
  );
};
