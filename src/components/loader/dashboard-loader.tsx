import { Center, Spinner } from 'native-base';
import React from 'react';

export const DashboardLoader = () => {
  return (
    <Center height={800}>
      <Spinner size="lg" color="brand.main" />
    </Center>
  );
};
