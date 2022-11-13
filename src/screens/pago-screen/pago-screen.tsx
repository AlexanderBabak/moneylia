import React from 'react';
import { Text } from 'native-base';
import { Container } from '../../navigation/container';

export const PagoScreen = () => {
  return (
    <Container bgColor="brand.secondary" statusBarColor="#BF7EE6">
      <Text fontFamily="mono" fontWeight={500} fontSize={30} color="text.main">
        PagoPA screen
      </Text>
    </Container>
  );
};
