import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {NativeBaseProvider, Box} from 'native-base';

export const App = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 20, fontWeight: '700'},
});
