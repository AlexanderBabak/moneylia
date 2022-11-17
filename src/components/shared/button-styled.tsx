import React from 'react';
import { Text, Pressable, Box } from 'native-base';
import {
  ResponsiveValue,
  ColorType,
} from 'native-base/lib/typescript/components/types';
import { ILinearGradientProps } from 'native-base/lib/typescript/components/primitives/Box/types';
import { GestureResponderEvent } from 'react-native';

type Props = {
  color: ResponsiveValue<ColorType | ILinearGradientProps>;
  pressedColor: ResponsiveValue<ColorType | ILinearGradientProps>;
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  title: string;
};

export const ButtonStyled: React.FC<Props> = ({
  color,
  pressedColor,
  title,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} alignSelf="stretch">
      {({ isPressed }) => (
        <Box
          bg={isPressed ? pressedColor : color}
          style={{
            transform: [
              {
                scale: isPressed ? 0.96 : 1,
              },
            ],
          }}
          p="4"
          rounded="6"
          alignItems="center"
        >
          <Text fontSize={18} fontWeight={600} lineHeight={18} color="white">
            {title}
          </Text>
        </Box>
      )}
    </Pressable>
  );
};
