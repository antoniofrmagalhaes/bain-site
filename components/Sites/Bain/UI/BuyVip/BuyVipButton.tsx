'use client';

import React from 'react';

import { Button, useDisclosure } from '@chakra-ui/react';

import BuyVipModal from './BuyVipModal';

export default function BuyVipButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        size="md"
        onClick={onOpen}
        color="white"
        variant="outline"
        borderWidth={1}
        borderColor="brand.500"
        boxShadow="md"
        _hover={{ backgroundColor: 'brand.500', color: 'black' }}
        _active={{ boxShadow: 'none' }}
      >
        Comprar VIP
      </Button>

      {isOpen && <BuyVipModal isOpen={isOpen} onClose={onClose} />}
    </>
  );
}
