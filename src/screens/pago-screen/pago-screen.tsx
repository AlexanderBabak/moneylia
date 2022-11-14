import React from 'react';
import { Text, Box, HStack, ScrollView, StatusBar } from 'native-base';
import { Container } from '../../components/navigation/container';
import PagoPaLogoIcon from '../../assets/svg-icons/pago-pa-logo-icon';

export const PagoScreen = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor="#BF7EE6" barStyle="default" />
      <Container bgColor="brand.secondary">
        <Box
          height={82}
          bgColor="brand.secondary"
          padding={4}
          borderBottomRadius={16}
        >
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontWeight={600} fontSize={24} color="white" lineHeight={28}>
              Tax payments
            </Text>
            <PagoPaLogoIcon width={50} height={40} color="#fff" />
          </HStack>
        </Box>
      </Container>
    </ScrollView>
  );
};
