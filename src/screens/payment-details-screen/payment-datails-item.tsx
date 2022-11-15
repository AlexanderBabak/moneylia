import { Divider, Text, VStack } from 'native-base';
import React from 'react';

type Props = {
  title: string;
  details: string[];
  textTransform?: any;
};

export const PaymentDatailsItem: React.FC<Props> = ({
  title,
  details,
  textTransform,
}) => {
  return (
    <>
      <Divider bgColor="#EAEAEC" />
      <VStack paddingY="14px">
        <Text
          fontSize={16}
          fontWeight={600}
          lineHeight={20}
          color="text.neutralDark"
          marginBottom="2px"
        >
          {title}
        </Text>
        {details.map((detail, index) => (
          <Text
            key={index}
            fontSize={16}
            lineHeight={19}
            textTransform={textTransform ? textTransform : 'none'}
            color="text.neutralMedium"
          >
            {detail}
          </Text>
        ))}
      </VStack>
    </>
  );
};
