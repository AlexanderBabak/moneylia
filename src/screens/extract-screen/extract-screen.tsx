import { Text, HStack, Center, useTheme } from 'native-base';
import React from 'react';

import { Container } from '../../navigation/container';

export const ExtractScreen = () => {
  const { colors } = useTheme();
  return (
    <Container bgColor="brand.main" statusBarColor="#7476ED">
      <Text fontFamily="mono" fontWeight={500} fontSize={30} color="text.main">
        Extract screen
      </Text>
      <HStack space={2} padding={2}>
        <Center h="40" bg="primary.300" rounded="md" flex={1}>
          Hello
        </Center>
        <Center h="40" bg="primary.300" rounded="md" flex={1}>
          Hello
        </Center>
      </HStack>
    </Container>
  );
};
