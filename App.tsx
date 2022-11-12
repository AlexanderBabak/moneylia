import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

export const App = () => {
  return (
    <NativeBaseProvider>
      <Box>Babak connection</Box>
    </NativeBaseProvider>
  );
};
