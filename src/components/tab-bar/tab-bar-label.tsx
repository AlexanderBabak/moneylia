import { Text } from 'native-base';
import React from 'react';

type Props = {
  color: string;
  title: string;
};

export const TabBarLabel: React.FC<Props> = ({ color, title }) => {
  return (
    <Text color={color} fontFamily="mono" fontSize={11}>
      {title}
    </Text>
  );
};
