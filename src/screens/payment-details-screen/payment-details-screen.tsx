import {
  Center,
  Heading,
  VStack,
  Text,
  HStack,
  Divider,
  Pressable,
  Box,
} from 'native-base';
import React from 'react';
import PagoPaLogoDetailsIcon from '../../assets/svg-icons/pago-pa-logo-details-icon';
import { Alert } from 'react-native';

// можно сделать переиспользуемый компонент для заголовка и текста

export const PaymentDetailsScreen = () => {
  return (
    <VStack
      paddingX={4}
      bgColor="white"
      h="100%"
      justifyContent="space-between"
    >
      {/* детали платежа */}
      <VStack>
        <HStack paddingY="24px" alignItems="center">
          <Heading
            fontSize={20}
            fontWeight={600}
            lineHeight={24}
            color="text.main"
            flex={1}
          >
            Payment notice
          </Heading>
          <Center
            w="40px"
            h="40px"
            bgColor="rgba(0, 102, 204, 0.1)"
            rounded="md"
          >
            <PagoPaLogoDetailsIcon color="#BF7EE6" />
          </Center>
        </HStack>
        <Divider bgColor="#EAEAEC" />
        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Creditor
          </Text>
          {/* adress.code */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            ENPACL
          </Text>
          {/* adress.street */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            Via del Caravaggio n. 78
          </Text>
          {/* adress.postCode */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            00147 (RM)
          </Text>
        </VStack>
        <Divider bgColor="#EAEAEC" />
        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Causal
          </Text>
          {/* description */}
          <Text
            fontSize={16}
            lineHeight={19}
            color="text.neutralMedium"
            textTransform="uppercase"
          >
            subjective and supplementary contribution year 2021 expiry
          </Text>
          {/* expiryDate */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            23/05/2022
          </Text>
        </VStack>
        <Divider bgColor="#EAEAEC" />
        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Expiry date
          </Text>
          {/* expiryDate */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            23/05/2022
          </Text>
        </VStack>
        <Divider bgColor="#EAEAEC" />
        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Creditor tax code
          </Text>
          {/* taxCode */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            8321911732424
          </Text>
        </VStack>
        <Divider bgColor="#EAEAEC" />
        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Notice code
          </Text>
          {/* noticeCode */}
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            301000000014982222
          </Text>
        </VStack>
      </VStack>
      {/* сумма и кнопка */}
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
          {/* сделать shared */}
          <Pressable
            onPress={() =>
              Alert.alert('Attention!', 'You are amazing at pushing buttons!')
            }
            alignSelf="stretch"
          >
            {({ isPressed }) => (
              <Box
                // colors prop
                bg={isPressed ? '#AE61D2' : 'brand.secondary'}
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                p="4"
                rounded="6"
                alignItems="center"
              >
                <Text
                  fontSize={18}
                  fontWeight={600}
                  lineHeight={18}
                  color="white"
                >
                  {/* title */}
                  Pay now
                </Text>
              </Box>
            )}
          </Pressable>
        </VStack>
      </VStack>
    </VStack>
  );
};
