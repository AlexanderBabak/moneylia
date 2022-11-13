import { Text } from 'native-base';
import React from 'react';
import { Container } from '../navigation/container';

export const Settings = () => {
  return (
    <Container bgColor="brand.secondary" statusBarColor="#BF7EE6">
      <Text>Set your settings</Text>
    </Container>
  );
};
