import React, { useEffect } from 'react';
import { theme } from './assets/theme/theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './navigation/stack-navigation/stack-navigation';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
