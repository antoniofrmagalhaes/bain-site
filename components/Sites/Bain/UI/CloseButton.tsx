import { Box, Flex } from '@chakra-ui/react';

import { motion } from 'framer-motion';

interface CloseButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MotionBox = motion(Box);

export default function CloseButton({ onClick, isOpen }: CloseButtonProps) {
  return (
    <Box onClick={onClick} cursor="pointer">
      <Flex
        direction="column"
        justify="space-between"
        alignItems="center"
        height={{ base: '24px', sm: '26px', md: '28px' }}
        width={{ base: '32px', sm: '34px', md: '36px' }}
      >
        <MotionBox
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#FFB430',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />
        <MotionBox
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#FFB430',
            borderRadius: '2px',
          }}
        />
        <MotionBox
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -15 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: '#FFB430',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />
      </Flex>
    </Box>
  );
}
