import { Center, Spinner } from 'native-base';
import React from 'react';

export const PaymentLoader = () => {
  return (
    <Center height="100%">
      <Spinner size="lg" color="brand.secondary" />
    </Center>
  );
};
