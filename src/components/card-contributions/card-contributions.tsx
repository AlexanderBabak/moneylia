import React, { NamedExoticComponent } from 'react';
import { Text, useTheme, Center } from 'native-base';
import { SvgProps } from 'react-native-svg';

type Props = {
  title: string;
  value?: string;
  icon: NamedExoticComponent<SvgProps>;
};

export const CardContributions: React.FC<Props> = ({ icon, title, value }) => {
  const { colors } = useTheme();

  const IconComponent = icon;

  return (
    <Center h="124" bg="white" rounded="xl" flex={1} shadow={0}>
      <IconComponent width={32} height={32} color={colors.brand.main} />
      <Text
        fontSize={12}
        lineHeight={16}
        color="text.neutralMedium"
        paddingTop={2}
      >
        {title}
      </Text>
      <Text
        fontSize={16}
        lineHeight={23}
        color={value ? colors.text.main : '#F83E5A'}
      >
        {value ? value : 'Unavailable'}
      </Text>
    </Center>
  );
};
