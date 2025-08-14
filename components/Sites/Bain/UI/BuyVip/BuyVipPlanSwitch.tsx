'use client';

import React from 'react';

import { Flex, HStack, Switch, Text } from '@chakra-ui/react';

type BuyVipPlanSwitchProps = {
  isQuarterly: boolean;
  setIsQuarterly: () => void;
};

export default function BuyVipPlanSwitch({ isQuarterly, setIsQuarterly }: BuyVipPlanSwitchProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontSize="12px" fontWeight="medium">
        PLANO
      </Text>
      <HStack>
        <Text fontSize="12px" fontWeight="medium">
          Mensal
        </Text>
        <Switch isChecked={isQuarterly} onChange={setIsQuarterly} colorScheme="yellow" size="md" />
        <Text fontSize="12px" fontWeight="medium">
          Trimestral
        </Text>
      </HStack>
    </Flex>
  );
}
