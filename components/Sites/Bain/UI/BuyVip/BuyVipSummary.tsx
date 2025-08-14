'use client';

import React from 'react';

import { Flex, Text } from '@chakra-ui/react';

type BuyVipSummaryProps = {
  isQuarterly: boolean;
};

export default function BuyVipSummary({ isQuarterly }: BuyVipSummaryProps) {
  return (
    <>
      <Flex justify="space-between">
        <Text fontSize="12px">SUBTOTAL</Text>
        <Text fontSize="12px">{isQuarterly ? 'R$ 45,00' : 'R$ 15,00'}</Text>
      </Flex>

      <Flex justify="space-between">
        <Text fontSize="12px">DESCONTO</Text>
        <Text fontSize="12px" color={isQuarterly ? 'green.500' : 'whitesmoke'}>
          {isQuarterly ? 'R$ -5,00' : 'R$ 0,00'}
        </Text>
      </Flex>

      <Flex justify="space-between">
        <Text fontSize="16px" fontWeight="bold">
          TOTAL DO PLANO
        </Text>
        <Text fontSize="16px" fontWeight="bold">
          {isQuarterly ? 'R$ 40,00' : 'R$ 15,00'}
        </Text>
      </Flex>
    </>
  );
}
