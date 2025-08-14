import React from 'react';

import { Box } from '@chakra-ui/react';

import { AnimatePresence } from 'framer-motion';

import Header from './Header';
import PaymentWatcher from '../UI/payment-watcher';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box position="relative" width="100%" bg="gray.900" overflowX="hidden">
      <Header />
      <PaymentWatcher />
      <Box width="100%">
        <AnimatePresence>{children}</AnimatePresence>
      </Box>
    </Box>
  );
};

export default PageLayout;
