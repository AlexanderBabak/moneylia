import React from 'react';
import { useTheme } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from '../../screens/dashboard-screen/dashboard-screen';
import { ExtractScreen } from '../../screens/extract-screen/extract-screen';
import { PagoScreen } from '../../screens/pago-screen/pago-screen';
import { ProfileScreen } from '../../screens/profile-screen/profile-screen';
import { TabBarBorder } from '../../components/tab-bar/tab-bar-border';
import { TabBarLabel } from '../../components/tab-bar/tab-bar-label';
import DashboardTabIcon from '../../assets/svg-icons/dashboard-tab-icon';
import ExtractTabIcon from '../../assets/svg-icons/extract-tab-icon';
import PagoPaTabIcon from '../../assets/svg-icons/pago-pa-tab-icon';
import ProfileTabIcon from '../../assets/svg-icons/profile-tab-icon';

const Tab = createBottomTabNavigator();

export const MainApp = () => {
  const { colors } = useTheme();
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
        tabBarActiveTintColor: colors.brand.main,
        tabBarInactiveTintColor: colors.text.neutralLight,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <TabBarBorder />}
              <DashboardTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <TabBarLabel color={color} title="Dashboard" />
          ),
        }}
      />
      <Tab.Screen
        name="Extract"
        component={ExtractScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <TabBarBorder />}
              <ExtractTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <TabBarLabel color={color} title="Extract" />
          ),
        }}
      />
      <Tab.Screen
        name="PagoPA"
        component={PagoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <TabBarBorder />}
              <PagoPaTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <TabBarLabel color={color} title="PagoPA" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              {focused && <TabBarBorder />}
              <ProfileTabIcon color={color} width={30} height={30} />
            </>
          ),
          tabBarLabel: ({ color }) => (
            <TabBarLabel color={color} title="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
