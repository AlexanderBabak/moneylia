import {
  Center,
  Heading,
  Text,
  VStack,
  Pressable,
  Box,
  Link,
} from 'native-base';
import { Image } from 'react-native';
import React from 'react';

export const ProfileScreen = () => {
  return (
    <Center bg="white">
      <Center maxW={300} paddingY={33}>
        <VStack alignItems="center" justifyContent="space-around" height="100%">
          <Image
            source={require('../../assets/images/join-screen-image.png')}
          />
          <VStack alignItems="center" space={2}>
            <Heading
              fontWeight={600}
              fontSize={32}
              lineHeight={38}
              color="text.main"
            >
              Save your money
            </Heading>
            <Text textAlign="center" lineHeight={21} color="text.neutralMedium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in
              quis erat a sit.
            </Text>
          </VStack>

          <Pressable
            onPress={() => console.log('Button pressed!!!')}
            alignSelf="stretch"
          >
            {({ isPressed }) => (
              <Box
                bg={isPressed ? 'text.main' : 'brand.main'}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                p="5"
                rounded="6"
                alignItems="center"
              >
                <Text
                  fontSize={18}
                  fontWeight={600}
                  lineHeight={18}
                  color="white"
                >
                  Join for free
                </Text>
              </Box>
            )}
          </Pressable>

          <Link lineHeight={21} color="text.main" href="https://nativebase.io">
            Don't have SPID or CIE? Find out more
          </Link>
        </VStack>
      </Center>
    </Center>
  );
};
