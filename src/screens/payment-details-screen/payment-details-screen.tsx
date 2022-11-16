import React from 'react';
import { VStack } from 'native-base';
import { PaymentDatailsItem } from './payment-datails-item';
import { PaymentDetailsNotice } from './payment-details-notice';
import { PaymentDetailsTotal } from './payment-details-total';
import { useAppSelector } from '../../redux/reduxType';

export const PaymentDetailsScreen = () => {
  const { payments } = useAppSelector(state => state.payments);
  const payment = payments![0];

  return (
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
          textTransform="uppercase"
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

      <PaymentDetailsTotal />
    </VStack>
  );
};
