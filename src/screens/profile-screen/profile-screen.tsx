import { Text } from 'native-base';
import React from 'react';
import { Container } from '../../navigation/container';

export const ProfileScreen = () => {
  return (
    <Container bgColor="brand.main" statusBarColor="#7476ED">
      <Text fontFamily="mono" fontWeight={500} fontSize={30} color="text.main">
        Extract screen
      </Text>
    </Container>
  );
};
