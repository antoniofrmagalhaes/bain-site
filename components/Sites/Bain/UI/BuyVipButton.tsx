import { useEffect, useRef } from 'react';

import { useApplication } from '@/contexts/ApplicationContext';
import {
  Text,
  Box,
  Stack,
  Flex,
  useDisclosure,
  CloseButton,
  Button,
  Portal,
  Image,
  Divider,
  Grid,
  HStack,
  Link,
} from '@chakra-ui/react';

import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export default function BuyVipButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { pageContent } = useApplication();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleToggle = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <Box position="relative">
      <Button
        size={{ base: 'sm', md: 'md' }}
        onClick={handleToggle}
        ref={buttonRef}
        color="white"
        variant="outline"
        borderWidth={1}
        borderColor="brand.500"
        boxShadow="md"
        _hover={{ backgroundColor: 'brand.500', color: 'black' }}
        _active={{ boxShadow: 'none' }}
      >
        <Text fontWeight={500} fontSize={{ base: 12, md: 15 }}>
          {pageContent.ui.buyVipButton.buttonText}
        </Text>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <Portal>
            <MotionBox
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              position="fixed"
              top={0}
              left={0}
              width="100vw"
              height="100vh"
              zIndex={1000}
              background="linear-gradient(rgba(17, 19, 24, 0.9), rgba(17, 19, 24, 0.9)), url('/foy.jpg')"
              backgroundSize="cover"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              overflowY="auto"
              padding="20px"
            >
              <CloseButton
                position="absolute"
                top={8}
                right={8}
                onClick={onClose}
                color="#FFB430"
                aria-label={pageContent.ui.buyVipButton.closeButtonAriaLabel}
              />

              <Flex
                direction="column"
                alignItems="center"
                justifyContent="flex-start"
                maxW="1424px"
                width="100%"
                mx="auto"
                p={4}
              >
                <Stack spacing="50px" flex={1} color="white" width="100%">
                  <Stack>
                    <HStack fontSize={42}>
                      <Text lineHeight="shorter">{pageContent.ui.buyVipButton.modal.titlePart1}</Text>
                      <Text fontWeight="bold" color="brand.500">
                        {pageContent.ui.buyVipButton.modal.titlePart2}
                      </Text>
                    </HStack>
                    <Text fontSize={18} color="gray.300">
                      {pageContent.ui.buyVipButton.modal.description}
                    </Text>
                  </Stack>

                  <Grid
                    gap={6}
                    width="100%"
                    mx="auto"
                    templateColumns="1fr"
                    sx={{
                      '@media(min-width: 763px)': {
                        gridTemplateColumns: 'repeat(2, 1fr)',
                      },
                      '@media(min-width: 1440px)': {
                        gridTemplateColumns: 'repeat(4, 1fr)',
                      },
                    }}
                  >
                    {pageContent.ui.buyVipButton.modal.plans.map((plan: any, index: number) => (
                      <Stack
                        key={index}
                        spacing={4}
                        p={5}
                        bg="gray.800"
                        align="center"
                        border="2px solid #ffb430"
                        borderRadius={8}
                      >
                        <Box width="290px" height="290px" overflow="hidden">
                          <Image width="100%" height="100%" objectFit="cover" src={plan.imageSrc} alt={plan.altText} />
                        </Box>
                        <Stack textAlign="left">
                          <Flex fontSize={15} width="100%" justifyContent="space-between">
                            <Text fontWeight="500" color="#FFB430">
                              {plan.name}
                            </Text>
                            {plan.discountedPrice ? (
                              <HStack alignItems="flex-end">
                                <Text color="red" textDecoration="line-through" as="small">
                                  {plan.originalPrice}
                                </Text>
                                <Text fontSize={20}>{plan.discountedPrice}</Text>
                              </HStack>
                            ) : (
                              <Text fontSize={20}>{plan.price}</Text>
                            )}
                          </Flex>
                          <Divider />
                          <Text>{plan.description}</Text>
                        </Stack>
                      </Stack>
                    ))}
                  </Grid>

                  <Flex justifyContent="center">
                    <Link href="https://discord.gg/bainclan" isExternal>
                      <MotionButton
                        color="white"
                        variant="outline"
                        borderWidth={1}
                        borderColor="brand.500"
                        boxShadow="md"
                        _hover={{ backgroundColor: 'brand.500', color: 'black' }}
                        _active={{ boxShadow: 'none' }}
                        fontSize={15}
                        fontWeight={500}
                      >
                        {pageContent.ui.buyVipButton.modal.ctaButtonText}
                      </MotionButton>
                    </Link>
                  </Flex>
                </Stack>
              </Flex>
            </MotionBox>
          </Portal>
        )}
      </AnimatePresence>
    </Box>
  );
}
