import React from 'react';
import { theme } from './src/assets/theme/theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { MainApp } from './src/components/main-app/main-app';

export const App = () => {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <MainApp />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
};
