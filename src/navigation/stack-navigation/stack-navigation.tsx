import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainApp } from '../main-app-navigation/main-app';
import { JoinScreen } from '../../screens/join-screen/join-screen';
import { PaymentDetailsScreen } from '../../screens/payment-details-screen/payment-details-screen';
import { HeaderNavigation } from '../header-navigation/header-navigation';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
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
          title: 'Payment details',
        }}
      />
    </Stack.Navigator>
  );
};
