import React, { useEffect } from 'react';
import { Text, Box, HStack, Heading, FlatList, useTheme } from 'native-base';
import { Container } from '../../navigation/container';
import { CardPayment } from '../../components/card-payment/card-payment';
import { PagoLoader } from '../../components/loader/pago-loader';
import { ListRenderItem } from 'react-native';
import { Payment } from '../../interfaces/payment-interface';
import { useAppDispatch, useAppSelector } from '../../redux/reduxType';
import { getPaymentsThunk } from '../../redux/slices/paymentsThunk';
import PagoPaLogoIcon from '../../assets/svg-icons/pago-pa-logo-icon';

const renderItem: ListRenderItem<Payment> = ({ item }) => (
  <CardPayment payment={item} />
);

export const PagoScreen = () => {
  const { payments, loadingPayments, errorPayments } = useAppSelector(
    state => state.payments,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaymentsThunk());
  }, [dispatch]);

  const { colors } = useTheme();

  return (
    <Container bgColor="brand.secondary">
      <Box
        height={82}
        padding={4}
        borderBottomRadius={16}
        bgColor="brand.secondary"
      >
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontWeight={600} fontSize={24} color="white" lineHeight={28}>
            Tax payments
          </Text>
          <PagoPaLogoIcon width={50} height={40} color={colors.white} />
        </HStack>
      </Box>
      <Box padding={4} height="82%">
        <Heading
          fontSize={24}
          fontWeight={600}
          lineHeight={29}
          marginBottom={1}
          color="text.main"
        >
          Movements to pay
        </Heading>
        <Text fontFamily="mono" lineHeight={21} color="text.neutralMedium">
          View pending transactions for the past two years and proceed to
          payment.
        </Text>

        {loadingPayments && <PagoLoader />}
        {errorPayments && <Text>Error...</Text>}
        {!loadingPayments && !errorPayments && (
          <FlatList
            data={payments}
            renderItem={renderItem}
            keyExtractor={(item: Payment) => item.taxCode}
          />
        )}
      </Box>
    </Container>
  );
};
