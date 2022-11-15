import { View, Pressable, HStack, useTheme } from 'native-base';
import React from 'react';
import LogoIcon from '../../assets/svg-icons/logo-icon';
import ChatIcon from '../../assets/svg-icons/chat-icon';

// пофиксить any

export const Container: React.FC<any> = ({ children, bgColor }) => {
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
          <Pressable>
            <ChatIcon color={colors.white} width={28} height={28} />
          </Pressable>
        </HStack>
        <View>{children}</View>
      </View>
    </>
  );
};
