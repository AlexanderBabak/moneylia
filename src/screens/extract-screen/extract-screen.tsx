import React from 'react';
import { Center, Heading, Box } from 'native-base';
import { Image } from 'react-native';
import { Container } from '../../navigation/container';

export const ExtractScreen = () => {
  return (
    <Container bgColor="brand.main">
      <Center bg="white" height="100%" paddingBottom={20}>
        <Image source={require('../../assets/images/join-screen-image.png')} />
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
      </Center>
    </Container>
  );
};
