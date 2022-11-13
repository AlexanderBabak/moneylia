import React from 'react';
import { ScrollView, Text, Flex, Link, Button } from 'native-base';

export const PagoScreen = () => {
  return (
    <ScrollView>
      <Flex
        alignItems="center"
        justifyContent="center"
        width="290"
        margin="auto"
      >
        <Text color="text.main" fontSize={32} fontWeight="600">
          Save your money
        </Text>
        <Text
          color="text.neutralMedium"
          fontWeight="400"
          textAlign="center"
          lineHeight="21"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in quis
          erat a sit.
        </Text>
        <Button
          bgColor="brand.main"
          width="100%"
          onPress={() => console.log('hello world')}
        >
          <Text fontWeight="600" color="white" fontSize="18" lineHeight="20">
            Join for free
          </Text>
        </Button>
        <Link href="#">Don't have SPID or CIE? Find out more</Link>
      </Flex>
    </ScrollView>
  );
};
