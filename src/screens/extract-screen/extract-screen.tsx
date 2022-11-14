import { Center, Heading, VStack, Box } from 'native-base';
import { Image } from 'react-native';
import React from 'react';

export const ExtractScreen = () => {
  return (
    <Center bg="white">
      <Center maxW={300} paddingY={33}>
        <VStack alignItems="center" justifyContent="center" height="100%">
          <Image
            source={require('../../assets/images/join-screen-image.png')}
          />
          <Box maxW={250}>
            <Heading
              fontWeight={600}
              fontSize={32}
              lineHeight={38}
              color="text.main"
              textAlign="center"
            >
              Your ad could be here
            </Heading>
          </Box>
        </VStack>
      </Center>
    </Center>
  );
};
