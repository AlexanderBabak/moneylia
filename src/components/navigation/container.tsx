import React from 'react';
import { View, Pressable, HStack, useTheme, Box } from 'native-base';
import { Alert } from 'react-native';
import LogoIcon from '../../assets/svg-icons/logo-icon';
import ChatIcon from '../../assets/svg-icons/chat-icon';
import {
  ColorType,
  ResponsiveValue,
} from 'native-base/lib/typescript/components/types';
import { ILinearGradientProps } from 'native-base/lib/typescript/components/primitives/Box/types';

type Props = {
  bgColor: ResponsiveValue<ColorType | ILinearGradientProps>;
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children, bgColor }) => {
  const { colors } = useTheme();
  return (
    <>
      <View bgColor="#F8F4FF" height="100%">
        <HStack
          height={100}
          bgColor={bgColor}
          alignItems="flex-end"
          justifyContent="space-between"
          paddingY={7}
          paddingX={4}
        >
          <LogoIcon color={colors.white} width={28} height={22} />

          <Pressable
            onPress={() =>
              Alert.alert('Attention!', 'You are amazing at pushing buttons!')
            }
          >
            {({ isPressed }) => (
              <Box
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
              >
                <ChatIcon color={colors.white} width={28} height={28} />
              </Box>
            )}
          </Pressable>
        </HStack>
        <View>{children}</View>
      </View>
    </>
  );
};
