import React, { useEffect, useState } from 'react';
import { Center, Heading, Box } from 'native-base';
import { Alert, Image } from 'react-native';
import { Container } from '../../navigation/container';
import axios from 'axios';

export const ProfileScreen = () => {
  const [payments, setPayments] = useState();

  useEffect(() => {
    axios
      .get('https://6374a81308104a9c5f852e22.mockapi.io/payments')
      .then(({ data }) => {
        setPayments(data);
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Error!', 'Fetching server error!');
      });
  }, []);

  console.log(payments);

  return (
    <Container bgColor="brand.secondary">
      <Center bg="white" height="100%" paddingBottom={20}>
        <Image source={require('../../assets/images/join-screen-image.png')} />
        <Box maxW={250}>
          <Heading
            fontWeight={600}
            fontSize={32}
            lineHeight={38}
            textAlign="center"
            color="text.main"
          >
            Your ad could be here
          </Heading>
        </Box>
      </Center>
    </Container>
  );
};
