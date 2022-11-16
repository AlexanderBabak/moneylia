import { View } from 'native-base';
import React from 'react';

export const TabBarBorder = () => {
  return (
    <View
      width={60}
      position="absolute"
      top={-5}
      borderTopWidth={2}
      borderTopColor="brand.main"
    />
  );
};
