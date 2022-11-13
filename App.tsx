import React from 'react';
import { theme } from './src/assets/theme/theme';
import { NativeBaseProvider, StatusBar, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './src/screens/dashboard-screen/dashboard-screen';
import { ExtractScreen } from './src/screens/extract-screen/extract-screen';
import DashboardTabIcon from './src/assets/svg-icons/dashboard-tab-icon';
import ExtractTabIcon from './src/assets/svg-icons/extract-tab-icon';
import PagoPaTabIcon from './src/assets/svg-icons/pago-pa-tab-icon';
import ProfileTabIcon from './src/assets/svg-icons/profile-tab-icon';
import { PagoScreen } from './src/screens/pago-screen/pago-screen';
import { ProfileScreen } from './src/screens/profile-screen/profile-screen';
const Tab = createBottomTabNavigator();

export const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#7476ED" barStyle="default" />
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              // tabBarItemStyle: { borderTopWidth: 0.1 }, стили для отдельных айтемов
              tabBarStyle: {
                height: 69,
                paddingBottom: 15,
                paddingTop: 5,
                borderTopWidth: 0.1,
              },
              tabBarActiveTintColor: '#7476ED',
              tabBarInactiveTintColor: '#A5A5AA',
            }}
          >
            <Tab.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
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
              component={ExtractScreen}
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
              component={PagoScreen}
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
              component={ProfileScreen}
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
    </>
  );
};
