import React from 'react';
import { Box, Text, useTheme } from 'native-base';
import { Container } from '../../navigation/container';

import { CardUser } from '../../components/card-user/card-user';

//здесь получаю данные о юзере и деньгах с сервера, аксиос гет с json-sserver

export const DashboardScreen = () => {
  const { colors } = useTheme();
  return (
    <Container bgColor="brand.main" statusBarColor={colors.brand.main}>
      <Box
        height={193}
        bgColor="brand.main"
        padding={4}
        borderBottomRadius={16}
      >
        <Text fontWeight={400} fontSize={32} color="white" lineHeight={38}>
          Hello, John S.
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
          color="text.main"
        >
          Contributions of 2022
        </Text>
      </Box>
    </Container>
  );
};
