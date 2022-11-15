import React from 'react';
import { Center, Heading, Text, VStack, Link } from 'native-base';
import { Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../interfaces/navigation-interfaces';
import { ButtonStyled } from '../../components/shared/button-styled';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'JoinScreen'>;
};

export const JoinScreen: React.FC<Props> = ({ navigation }) => {
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

          <ButtonStyled
            title="Join for free"
            color="brand.main"
            pressedColor="text.main"
            onPress={() => navigation.navigate('Main')}
          />

          <Link lineHeight={21} color="text.main" href="https://nativebase.io">
            Don't have SPID or CIE? Find out more
          </Link>
        </VStack>
      </Center>
    </Center>
  );
};
