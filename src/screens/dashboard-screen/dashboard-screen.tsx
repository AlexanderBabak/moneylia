import React, { useEffect } from 'react';
import { Box, HStack, ScrollView, StatusBar, Text, VStack } from 'native-base';
import { Container } from '../../navigation/container';
import { CardUser } from '../../components/card-user/card-user';
import { CardContributions } from '../../components/card-contributions/card-contributions';
import { DashboardLoader } from '../../components/loader/dashboard-loader';
import { useShortName } from '../../hooks/useShortName';
import { getUserThunk } from '../../redux/slices/userThunk';
import { useAppDispatch, useAppSelector } from '../../redux/reduxType';
import PaidIcon from '../../assets/svg-icons/paid-icon';
import DueIcon from '../../assets/svg-icons/due-icon';
import AdvancePaymentIcon from '../../assets/svg-icons/advance-payment-icon';
import ModularityIcon from '../../assets/svg-icons/modularity-icon';

export const DashboardScreen = () => {
  const { user, loadingUser, errorUser } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  const { shortName } = useShortName(user?.name);

  return (
    <ScrollView>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="rgba(0, 102, 204, 0)"
      />
      {loadingUser && <DashboardLoader />}
      {errorUser && <Text>Error...</Text>}
      {!loadingUser && !errorUser && (
        <Container bgColor="brand.main">
          <Box
            height={193}
            padding={4}
            borderBottomRadius={16}
            bgColor="brand.main"
          >
            <Text fontWeight={400} fontSize={32} color="white" lineHeight={38}>
              Hello, {shortName}
            </Text>
            <Text fontWeight={400} color="white" lineHeight={21}>
              Welcome in Moneylia
            </Text>
          </Box>
          <CardUser
            status={user?.status}
            birthday="26/01/1994"
            city="Barcelona"
            country="ES"
            number="100"
          />
          <Box padding={5}>
            <Text
              fontFamily="mono"
              fontWeight={500}
              fontSize={22}
              lineHeight={24}
              paddingBottom={3}
              color="text.main"
            >
              Contributions of 2022
            </Text>
            <VStack space={4}>
              <HStack space={4}>
                <CardContributions
                  title="Paid"
                  icon={PaidIcon}
                  value={user?.contributions[0].paid}
                />
                <CardContributions
                  title="Due"
                  icon={DueIcon}
                  value={user?.contributions[0].due}
                />
              </HStack>
              <HStack space={4}>
                <CardContributions
                  title="Advance payment"
                  value={user?.contributions[0].advancePayment}
                  icon={AdvancePaymentIcon}
                />
                <CardContributions
                  title="Modularity"
                  value={user?.contributions[0].modularity}
                  icon={ModularityIcon}
                />
              </HStack>
            </VStack>
          </Box>
        </Container>
      )}
    </ScrollView>
  );
};
