'use client';

import React, { useEffect, useRef } from 'react';

import { Box, Portal, CloseButton } from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';

import BuyVipForm, { BuyVipFormRef } from './BuyVipForm';

const MotionBox = motion(Box);

type BuyVipModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BuyVipModal({ isOpen, onClose }: BuyVipModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<BuyVipFormRef>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        formRef.current?.resetForm();
        onClose();
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <Box position="fixed" top={0} left={0} width="100vw" height="100vh" zIndex={999} bg="rgba(0,0,0,0.6)" />

          <MotionBox
            ref={modalRef}
            initial={{ x: 530, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 530, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            position="fixed"
            top={0}
            right={0}
            width={{ base: '100%', md: '530px' }}
            height="100vh"
            zIndex={1000}
            bg="gray.900"
            color="white"
            p={6}
            boxShadow="xl"
            overflowY="auto"
          >
            <CloseButton
              position="absolute"
              top={4}
              right={4}
              onClick={() => {
                formRef.current?.resetForm();
                onClose();
              }}
              color="white"
            />
            <BuyVipForm ref={formRef} />
          </MotionBox>
        </Portal>
      )}
    </AnimatePresence>
  );
}
