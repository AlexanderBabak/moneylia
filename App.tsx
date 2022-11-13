import React from 'react';
import { theme } from './src/assets/theme/theme';
import { NativeBaseProvider, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/screens/home-screen';
import { Settings } from './src/screens/settings';
import DashboardTabIcon from './src/assets/svg-icons/dashboard-tab-icon';
import ExtractTabIcon from './src/assets/svg-icons/extract-tab-icon';
import PagoPaTabIcon from './src/assets/svg-icons/pago-pa-tab-icon';
import ProfileTabIcon from './src/assets/svg-icons/profile-tab-icon';

import { TestContext } from './src/components/test-context';
const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Tab.Navigator
          screenOptions={{
            tabBarItemStyle: { borderTopWidth: 0.1 },
            tabBarStyle: { height: 69, paddingBottom: 15, paddingTop: 5 },
            tabBarActiveTintColor: '#7476ED',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <DashboardTabIcon color={color} width={30} height={30} />
              ),
              tabBarLabel: ({ color }) => (
                <Text color={color} fontFamily="mono" fontSize={11}>
                  Dashboard
                </Text>
              ),
              // tabBarItemStyle: { borderTopWidth: 2, borderColor: 'red' },
            }}
          />
          <Tab.Screen
            name="Extract"
            component={Settings}
            options={{
              tabBarIcon: ({ color }) => (
                <ExtractTabIcon color={color} width={30} height={30} />
              ),
              tabBarLabel: ({ color }) => (
                <Text color={color} fontFamily="mono" fontSize={11}>
                  Extract
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="PagoPA"
            component={Settings}
            options={{
              tabBarIcon: ({ color }) => (
                <PagoPaTabIcon color={color} width={30} height={30} />
              ),
              tabBarLabel: ({ color }) => (
                <Text color={color} fontFamily="mono" fontSize={11}>
                  PagoPA
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={TestContext}
            options={{
              tabBarIcon: ({ color }) => (
                <ProfileTabIcon color={color} width={30} height={30} />
              ),
              tabBarLabel: ({ color }) => (
                <Text color={color} fontFamily="mono" fontSize={11}>
                  Profile
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
