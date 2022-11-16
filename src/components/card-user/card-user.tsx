import React from 'react';
import { Box, HStack, Text, useTheme, VStack } from 'native-base';
import UserIcon from '../../assets/svg-icons/user-icon';
import { TextItemStyled } from './text-item-styled';

type Props = {
  status: string | undefined;
  birthday: string | undefined;
  city: string | undefined;
  country: string | undefined;
  number: string | undefined;
};

export const CardUser: React.FC<Props> = ({
  status,
  birthday,
  city,
  country,
  number,
}) => {
  const { colors } = useTheme();

  return (
    <Box
      height={178}
      width="90%"
      padding={6}
      margin="auto"
      marginTop={'-24'}
      marginBottom={1}
      bgColor="white"
      borderRadius={12}
      shadow={0}
      justifyContent="space-between"
    >
      <HStack alignItems="center" space={2}>
        <UserIcon color={colors.brand.main} width={20} height={20} />
        <Text fontWeight={600} fontSize={16} color="text.main">
          User summary
        </Text>
      </HStack>
      <HStack>
        <VStack width="50%">
          <TextItemStyled title="Status" description={status} />
        </VStack>
        <VStack>
          <TextItemStyled title="Birthday" description={birthday} />
        </VStack>
      </HStack>
      <HStack>
        <VStack width="50%">
          <TextItemStyled title="City" description={city} color="text.main" />
        </VStack>
        <HStack width="50%">
          <VStack width="50%">
            <TextItemStyled
              title="Country"
              description={country}
              color="text.main"
            />
          </VStack>
          <VStack>
            <TextItemStyled
              title="Number"
              description={number}
              color="text.main"
            />
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};
