import { Center, Heading } from 'native-base';
import React from 'react';

export const ErrorView = ({ message }: { message: string }) => {
  return (
    <Center height="100%">
      <Heading textAlign="center" color="text.main">
        {message}
      </Heading>
    </Center>
  );
};
