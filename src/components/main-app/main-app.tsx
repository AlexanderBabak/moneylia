import React from 'react';
import { Text, View } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../screens/dashboard-screen/dashboard-screen';
import { ExtractScreen } from '../../screens/extract-screen/extract-screen';
import { PagoScreen } from '../../screens/pago-screen/pago-screen';
import { ProfileScreen } from '../../screens/profile-screen/profile-screen';
import DashboardTabIcon from '../../assets/svg-icons/dashboard-tab-icon';
import ExtractTabIcon from '../../assets/svg-icons/extract-tab-icon';
import PagoPaTabIcon from '../../assets/svg-icons/pago-pa-tab-icon';
import ProfileTabIcon from '../../assets/svg-icons/profile-tab-icon';
const Tab = createBottomTabNavigator();

export const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
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
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <View
                  borderTopWidth={2}
                  borderTopColor="#7476ED"
                  width={60}
                  position="absolute"
                  top={-5}
                />
              )}
              <DashboardTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <Text color={color} fontFamily="mono" fontSize={11}>
              Dashboard
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Extract"
        component={ExtractScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <View
                  borderTopWidth={2}
                  borderTopColor="#7476ED"
                  width={60}
                  position="absolute"
                  top={-5}
                />
              )}
              <ExtractTabIcon color={color} width={30} height={30} />
            </>
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
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <View
                  borderTopWidth={2}
                  borderTopColor="#7476ED"
                  width={60}
                  position="absolute"
                  top={-5}
                />
              )}
              <PagoPaTabIcon color={color} width={30} height={30} />
            </>
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
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && (
                <View
                  borderTopWidth={2}
                  borderTopColor="#7476ED"
                  width={60}
                  position="absolute"
                  top={-5}
                />
              )}
              <ProfileTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <Text color={color} fontFamily="mono" fontSize={11}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
