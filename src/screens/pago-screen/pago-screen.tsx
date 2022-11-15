import React from 'react';
import { Text, Box, HStack, Heading, FlatList } from 'native-base';
import { Container } from '../../components/navigation/container';
import PagoPaLogoIcon from '../../assets/svg-icons/pago-pa-logo-icon';
import { CardPayment } from '../../components/card-payment/card-payment';
import { ListRenderItem } from 'react-native';
import { Payment } from '../../interfaces/payment-interface';

//сделать на серваке точно такой массив и фечить эти данные, они потом передаются в carPayment

const payments = [
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911704444',
    noticeCode: '301000000014982222',
  },
  {
    description: 'payment on deposit',
    expiryDate: '31/01/2022',
    sum: '€ 234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911732444',
    noticeCode: '301000000014982222',
  },
  {
    description: 'payment on deposit',
    expiryDate: '23/05/2022',
    sum: '€ 634.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8321911732444',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911778444',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911704984',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 3,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911732454',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911704944',
    noticeCode: '301000000014982222',
  },
  {
    description: 'payment on deposit',
    expiryDate: '31/01/2022',
    sum: '€ 234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911737444',
    noticeCode: '301000000014982222',
  },
  {
    description: 'payment on deposit',
    expiryDate: '23/05/2022',
    sum: '€ 634.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8321911732424',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911778440',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 1,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911704982',
    noticeCode: '301000000014982222',
  },
  {
    description:
      'subjective and supplementary contribution year 2021 expires...',
    expiryDate: '28/02/2022',
    sum: '€ 3,234.99',
    address: {
      code: 'ENPACL',
      street: 'Via del Caravaggio n. 78',
      postCode: '00147 (RM)',
    },
    taxCode: '8011911732457',
    noticeCode: '301000000014982222',
  },
];

const renderItem: ListRenderItem<Payment> = ({ item }) => (
  <CardPayment payment={item} />
);

export const PagoScreen = () => {
  return (
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
      <Box padding={4} height="82%">
        <Heading
          fontSize={24}
          fontWeight={600}
          lineHeight={29}
          color="text.main"
          marginBottom={1}
        >
          Movements to pay
        </Heading>
        <Text
          fontFamily="mono"
          lineHeight={21}
          color="text.neutralMedium"
          marginBottom={4}
        >
          View pending transactions for the past two years and proceed to
          payment.
        </Text>

        <FlatList
          data={payments}
          renderItem={renderItem}
          keyExtractor={(item: Payment) => item.taxCode}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
        />
      </Box>
    </Container>
  );
};
