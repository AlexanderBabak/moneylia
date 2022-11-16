import React from 'react';
import { Center, Heading, HStack, useTheme } from 'native-base';
import PagoPaLogoDetailsIcon from '../../assets/svg-icons/pago-pa-logo-details-icon';

export const PaymentDetailsNotice = () => {
  const { colors } = useTheme();
  return (
    <HStack paddingY="24px" alignItems="center">
      <Heading
        fontSize={20}
        fontWeight={600}
        lineHeight={24}
        flex={1}
        color="text.main"
      >
        Payment notice
      </Heading>
      <Center w="40px" h="40px" bgColor="rgba(0, 102, 204, 0.1)" rounded="md">
        <PagoPaLogoDetailsIcon color={colors.brand.secondary} />
      </Center>
    </HStack>
  );
};
