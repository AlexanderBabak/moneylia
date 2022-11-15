import React from 'react';
import { theme } from './assets/theme/theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation/stack-navigation/stack-navigation';

export const App = () => {
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
};
