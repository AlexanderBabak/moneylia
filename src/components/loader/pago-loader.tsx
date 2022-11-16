import React from 'react';
import { Center, Spinner } from 'native-base';

export const PagoLoader = () => {
  return (
    <Center height={350}>
      <Spinner size="lg" color="brand.secondary" />
    </Center>
  );
};
