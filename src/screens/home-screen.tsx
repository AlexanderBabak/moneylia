import { Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text fontFamily="mono" fontWeight={500} fontSize={30} color="text.main">
        Home screen
      </Text>
    </View>
  );
};
