import React from 'react';
import { Heading, VStack, Text, HStack, Divider } from 'native-base';
import { Alert } from 'react-native';
import { ButtonStyled } from '../../components/shared/button-styled';

//здесь получает проп суммы

export const PaymentDetailsTotal = () => {
  return (
    <VStack>
      <Divider bgColor="#EAEAEC" />
      <VStack paddingX={2} paddingY={4} space={4}>
        <HStack>
          <Heading
            fontSize={20}
            lineHeight={24}
            fontWeight={600}
            color="text.neutralDark"
            flex={1}
          >
            Total due
          </Heading>
          {/* sum */}
          <Text fontSize={20} lineHeight={24} color="error.500">
            € 1,634.99
          </Text>
        </HStack>
        <ButtonStyled
          title="Pay now"
          color="brand.secondary"
          pressedColor="#AE61D2"
          onPress={() =>
            Alert.alert('Attention!', 'You are amazing at pushing buttons!')
          }
        />
      </VStack>
    </VStack>
  );
};
