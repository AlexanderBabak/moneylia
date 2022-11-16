import React from 'react';
import { Text } from 'native-base';

type Props = {
  title: string;
  description: string | undefined;
  color?: string;
};

export const TextItemStyled: React.FC<Props> = ({
  title,
  description,
  color = 'text.neutralDark',
}) => {
  return (
    <>
      <Text
        fontSize={12}
        lineHeight={14}
        color="text.neutralMedium"
        paddingBottom={1}
      >
        {title}
      </Text>
      <Text fontSize={16} lineHeight={19} color={color}>
        {description}
      </Text>
    </>
  );
};
