import { useEffect, useRef, useState } from 'react';
import { FaCircle } from 'react-icons/fa6';
import { GoStarFill, GoStar } from 'react-icons/go';

import { useApplication } from '@/contexts/ApplicationContext';
import {
  Text,
  Box,
  Stack,
  useDisclosure,
  Button,
  Portal,
  HStack,
  Divider,
  Center,
  Icon,
  useOutsideClick,
} from '@chakra-ui/react';

import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

function NewServerRules() {
  const { pageContent } = useApplication();

  return (
    <Stack spacing={5} px={5} width="100%" height="calc(100vh - 200px)" overflowY="auto">
      <Stack textAlign="center" fontSize={18} fontWeight={500}>
        {pageContent.ui.rulesButton.newServerRules.section1.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
      <HStack width="100%">
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
        <Icon as={GoStar} />
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
      </HStack>
      <Stack textAlign="center" fontWeight={500}>
        {pageContent.ui.rulesButton.newServerRules.section2.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
      <HStack width="100%">
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
        <Icon as={GoStar} />
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
      </HStack>
      <Stack textAlign="center" fontWeight={500}>
        {pageContent.ui.rulesButton.newServerRules.section3.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
    </Stack>
  );
}

function ConductRules() {
  const { pageContent } = useApplication();

  return (
    <Stack spacing={5} px={5} width="100%" height="calc(100vh - 200px)" overflowY="auto">
      <Stack textAlign="center" fontWeight={500}>
        <Text fontSize={20} fontWeight={700}>
          {pageContent.ui.rulesButton.conductRules.prohibitedTitle}
        </Text>
        {pageContent.ui.rulesButton.conductRules.section1.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
      <HStack width="100%">
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
        <Icon as={GoStar} />
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
      </HStack>
      <Stack textAlign="center" fontWeight={500}>
        {pageContent.ui.rulesButton.conductRules.section2.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
      <HStack width="100%">
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
        <Icon as={GoStar} />
        <Stack flex={1} spacing={1}>
          <Divider />
          <Divider />
        </Stack>
      </HStack>
      <Stack textAlign="center" fontWeight={500}>
        {pageContent.ui.rulesButton.conductRules.section3.map((text: string, index: number) => (
          <Text key={index}>{text}</Text>
        ))}
      </Stack>
    </Stack>
  );
}

export default function RulesButton() {
  const [viewIndex, setViewIndex] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { pageContent } = useApplication();

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'y' || event.key === 'Y') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKey);
    }

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  useOutsideClick({
    ref: contentRef,
    handler: event => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
  });

  const handleToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Button
        ref={buttonRef}
        variant="link"
        cursor="pointer"
        color="white"
        fontSize={{ base: 16, lg: 14 }}
        fontWeight={500}
        onClick={handleToggle}
        _hover={{
          color: 'brand.500',
        }}
      >
        {pageContent.ui.rulesButton.buttonText}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <MotionBox
              width="100vw"
              height="100vh"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              position="fixed"
              top={{ base: 0, lg: '.25rem' }}
              left={0}
              p={{ base: 0, lg: 4 }}
              zIndex={1000}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Stack
                ref={contentRef}
                width={{ base: '100%', lg: '500px' }}
                height={{ base: '100%', lg: '100%' }}
                spacing={5}
                p={4}
                alignItems="center"
                color="white"
                border="4px solid #5D352B"
                bg="#13110F"
              >
                <HStack width="60%" spacing={5} color="#5D352B">
                  <Stack flex={1} spacing={1}>
                    <Divider borderColor="#5D352B" />
                  </Stack>
                  <Text>{pageContent.ui.rulesButton.adminMessage}</Text>
                  <Stack flex={1} spacing={1}>
                    <Divider borderColor="#5D352B" />
                  </Stack>
                </HStack>
                <HStack fontSize={24}>
                  <HStack>
                    <Icon as={GoStarFill} />
                    <Icon as={GoStarFill} />
                    <Icon as={GoStarFill} />
                  </HStack>
                  <Text fontWeight={700}>{pageContent.ui.rulesButton.serverName}</Text>
                  <HStack>
                    <Icon as={GoStarFill} />
                    <Icon as={GoStarFill} />
                    <Icon as={GoStarFill} />
                  </HStack>
                </HStack>
                <HStack>
                  <Button
                    size="sm"
                    color={viewIndex === 0 ? 'black' : 'white'}
                    variant="outline"
                    borderWidth={1}
                    borderColor="brand.500"
                    boxShadow="md"
                    backgroundColor={viewIndex === 0 ? 'brand.500' : 'initial'}
                    _hover={{ backgroundColor: 'brand.500', color: 'black' }}
                    _active={{ boxShadow: 'none' }}
                    onClick={() => setViewIndex(0)}
                  >
                    {pageContent.ui.rulesButton.serverRulesButton}
                  </Button>
                  <Button
                    size="sm"
                    color={viewIndex === 1 ? 'black' : 'white'}
                    variant="outline"
                    borderWidth={1}
                    borderColor="brand.500"
                    boxShadow="md"
                    backgroundColor={viewIndex === 1 ? 'brand.500' : 'initial'}
                    _hover={{ backgroundColor: 'brand.500', color: 'black' }}
                    _active={{ boxShadow: 'none' }}
                    onClick={() => setViewIndex(1)}
                  >
                    {pageContent.ui.rulesButton.conductRulesButton}
                  </Button>
                </HStack>
                <HStack width="100%">
                  <HStack>
                    <Icon as={FaCircle} />
                  </HStack>
                  <Stack flex={1} spacing={1}>
                    <Divider />
                    <Divider />
                  </Stack>
                  <Icon as={GoStar} />
                  <Stack flex={1} spacing={1}>
                    <Divider />
                    <Divider />
                  </Stack>
                  <HStack>
                    <Icon as={FaCircle} />
                  </HStack>
                </HStack>
                {viewIndex === 0 && <NewServerRules />}
                {viewIndex === 1 && <ConductRules />}
                <HStack width="100%">
                  <HStack>
                    <Icon as={FaCircle} />
                  </HStack>
                  <Stack flex={1} spacing={1}>
                    <Divider />
                    <Divider />
                  </Stack>
                  <Icon as={GoStar} />
                  <Stack flex={1} spacing={1}>
                    <Divider />
                    <Divider />
                  </Stack>
                  <HStack>
                    <Icon as={FaCircle} />
                  </HStack>
                </HStack>
                <Center width="100%" height="100px">
                  <HStack onClick={onClose} cursor="pointer">
                    <Text>{pageContent.ui.rulesButton.closeButton}</Text>
                    <Text as="small" color="gold">
                      {pageContent.ui.rulesButton.confirmShortcut}
                    </Text>
                  </HStack>
                </Center>
              </Stack>
            </MotionBox>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
