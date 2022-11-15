import React from 'react';
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HeaderArrowIcon from '../../assets/svg-icons/header-arrow-icon';
import { useNavigation } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { RootParamList } from '../../interfaces/navigation-interfaces';
import { HStack, Text, Pressable, Box } from 'native-base';

type Props = NativeStackHeaderProps | BottomTabHeaderProps;

export const HeaderNavigation: React.FC<Props> = ({ options }) => {
  const navigation: NativeStackNavigationProp<RootParamList> = useNavigation();

  return (
    <HStack
      alignItems="flex-end"
      justifyContent="center"
      bgColor="#BF7EE6"
      h={90}
      paddingBottom={4}
    >
      <Pressable
        position="absolute"
        left="10px"
        top="50px"
        onPress={() => {
          navigation.goBack();
        }}
      >
        {({ isPressed }) => (
          <Box
            style={{
              transform: [
                {
                  scale: isPressed ? 0.8 : 1,
                },
              ],
            }}
          >
            <HeaderArrowIcon color="#fff" />
          </Box>
        )}
      </Pressable>

      <Text color="white" fontSize={16} lineHeight={19}>
        {options.title}
      </Text>
    </HStack>
  );
};
