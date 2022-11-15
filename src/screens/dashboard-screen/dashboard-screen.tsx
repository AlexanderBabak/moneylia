import React from 'react';
import { Box, HStack, ScrollView, StatusBar, Text, VStack } from 'native-base';
import { Container } from '../../navigation/container';
import { CardUser } from '../../components/card-user/card-user';
import { CardContributions } from '../../components/card-contributions/card-contributions';
import { useShortName } from '../../hooks/useShortName';
import PaidIcon from '../../assets/svg-icons/paid-icon';
import DueIcon from '../../assets/svg-icons/due-icon';
import AdvancePaymentIcon from '../../assets/svg-icons/advance-payment-icon';
import ModularityIcon from '../../assets/svg-icons/modularity-icon';

//здесь получаю данные о юзере и деньгах с сервера, аксиос гет с json-sserver

export const DashboardScreen = () => {
  // сюда передать имя
  const { shortName } = useShortName('John Simpson');

  return (
    <ScrollView>
      <StatusBar
        barStyle="default"
        translucent={true}
        backgroundColor="rgba(0, 102, 204, 0)"
      />
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
          status="Subscribed"
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
              <CardContributions title="Paid" icon={PaidIcon} />
              <CardContributions title="Due" icon={DueIcon} />
            </HStack>
            <HStack space={4}>
              <CardContributions
                title="Advance payment"
                value="€ 1,230.00"
                icon={AdvancePaymentIcon}
              />
              <CardContributions
                title="Modularity"
                value="€ 340.59"
                icon={ModularityIcon}
              />
            </HStack>
          </VStack>
        </Box>
      </Container>
    </ScrollView>
  );
};
