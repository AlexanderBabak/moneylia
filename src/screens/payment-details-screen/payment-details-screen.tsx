import React from 'react';
import { VStack } from 'native-base';
import { PaymentDatailsItem } from './payment-datails-item';
import { PaymentDetailsNotice } from './payment-details-notice';
import { PaymentDetailsTotal } from './payment-details-total';

// если будет время, сделать фетч на отдельные данные

// can get ID for fetching data

export const PaymentDetailsScreen = () => {
  return (
    <VStack
      paddingX={4}
      bgColor="white"
      h="100%"
      justifyContent="space-between"
    >
      <VStack>
        <PaymentDetailsNotice />

        <PaymentDatailsItem
          title="Creditor"
          details={['ENPACL', 'Via del Caravaggio n. 78', '00147 (RM)']}
        />
        <PaymentDatailsItem
          title="Causal"
          textTransform="uppercase"
          details={[
            'subjective and supplementary contribution year 2021 expiry',
            '23/05/2022',
          ]}
        />
        <PaymentDatailsItem title="Expiry date" details={['23/05/2022']} />
        <PaymentDatailsItem
          title="Creditor tax code"
          details={['8321911732424']}
        />
        <PaymentDatailsItem
          title="Notice code"
          details={['301000000014982222']}
        />
      </VStack>

      <PaymentDetailsTotal />
    </VStack>
  );
};

/*
<VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Creditor
          </Text>
         adress.code 
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            ENPACL
          </Text>
          adress.street
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            Via del Caravaggio n. 78
          </Text>
          adress.postCode 
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            00147 (RM)
          </Text>
        </VStack>


        <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Causal
          </Text>
          * description *
          <Text
            fontSize={16}
            lineHeight={19}
            color="text.neutralMedium"
            textTransform="uppercase"
          >
            subjective and supplementary contribution year 2021 expiry
          </Text>
          expiryDate 
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            23/05/2022
          </Text>
        </VStack>

                <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Expiry date
          </Text>
          /* expiryDate *
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            23/05/2022
          </Text>
        </VStack>


              <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Creditor tax code
          </Text>
          {/* taxCode 
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            8321911732424
          </Text>
        </VStack>

           <VStack paddingY="14px">
          <Text
            fontSize={16}
            fontWeight={600}
            lineHeight={20}
            color="text.neutralDark"
            marginBottom="2px"
          >
            Notice code
          </Text>
          {/* noticeCode *
          <Text fontSize={16} lineHeight={19} color="text.neutralMedium">
            301000000014982222
          </Text>
        </VStack>
*/
