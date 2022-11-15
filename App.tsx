import React from 'react';
import { theme } from './src/assets/theme/theme';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { MainApp } from './src/components/main-app/main-app';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JoinScreen } from './src/screens/join-screen/join-screen';
import { PaymentDetailsScreen } from './src/screens/payment-details-screen/payment-details-screen';
import { HeaderNavigation } from './src/components/header-navigation/header-navigation';

export const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Stack.Navigator
            initialRouteName="JoinScreen"
            screenOptions={{ header: props => <HeaderNavigation {...props} /> }}
          >
            <Stack.Screen
              name="JoinScreen"
              component={JoinScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={MainApp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentDetails"
              component={PaymentDetailsScreen}
              options={{
                // headerShown: false,
                title: 'Payment details',
              }}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
};
