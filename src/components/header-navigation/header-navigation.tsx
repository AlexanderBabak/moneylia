import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HeaderArrowIcon from '../../assets/svg-icons/header-arrow-icon';
import { useNavigation } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { RootParamList } from '../../interfaces/navigation-interfaces';

type Props = NativeStackHeaderProps | BottomTabHeaderProps;

/* переделать компоненты и стили */

export const HeaderNavigation: React.FC<Props> = ({ options }) => {
  const navigation: NativeStackNavigationProp<RootParamList> = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable
          style={({ pressed }) => (pressed ? styles.pressed : null)}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <HeaderArrowIcon color="#fff" />
        </Pressable>
        <Text style={styles.headerText}>{options.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height: 90,
    backgroundColor: '#BF7EE6',
    paddingHorizontal: 16,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Work Sans Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
    marginLeft: 80,
  },
  pressed: {
    opacity: 0.5,
  },
});
