import React from 'react';
import { Center, Text, VStack, Pressable, HStack } from 'native-base';
import PagoPaLogoIcon from '../../assets/svg-icons/pago-pa-logo-icon';
import PaymentArrowIcon from '../../assets/svg-icons/payment-arrow-icon';
import { Payment } from '../../interfaces/payment-interface';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../interfaces/navigation-interfaces';

type Props = {
  payment: Payment;
};

export const CardPayment: React.FC<Props> = ({ payment }) => {
  const navigation: NativeStackNavigationProp<
    RootStackParamList,
    'PaymentDetails'
  > = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('PaymentDetails', {
          paymentId: payment.taxCode,
        });
      }}
    >
      {({ isPressed }) => (
        <HStack
          height="80px"
          width="100%"
          bgColor={isPressed ? 'purple.100' : 'white'}
          rounded="lg"
          margin="auto"
          alignItems="center"
          padding={3}
          marginBottom={3}
          shadow={'0'}
          justifyContent="space-between"
          style={{
            transform: [
              {
                scale: isPressed ? 0.96 : 1,
              },
            ],
          }}
        >
          <Center
            w="56px"
            h="56px"
            bgColor="rgba(0, 102, 204, 0.1)"
            rounded="lg"
          >
            <PagoPaLogoIcon width={50} height={45} color="#BF7EE6" />
          </Center>

          <VStack
            maxWidth={230}
            width="100%"
            justifyContent="space-between"
            height="80%"
          >
            <Text
              textTransform="uppercase"
              fontFamily="mono"
              fontSize={12}
              lineHeight={15}
              color="text.neutralDark"
            >
              {/* здесь функция сокращает текст */}
              {payment.description}
            </Text>
            <HStack justifyContent="space-between">
              <Text lineHeight={21} color="text.neutralLight">
                {payment.expiryDate}
              </Text>
              <Text lineHeight={21} color="error.500">
                {payment.sum}
              </Text>
            </HStack>
          </VStack>
          <PaymentArrowIcon width={20} height={30} color="#9897A1" />
        </HStack>
      )}
    </Pressable>
  );
};
