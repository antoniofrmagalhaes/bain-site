import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Box, Flex, Stack, Portal } from '@chakra-ui/react';

import { motion, AnimatePresence } from 'framer-motion';

import MobileSidebarButton from './MobileSidebarButtonV2';
import RulesButton from './RulesButton';
import SelectLanguage from './SelectLanguage';
import BuyVipButton from './BuyVip/BuyVipButton';
import LiveGameButton from './LiveGameButton';

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {!isOpen && (
        <Box position="absolute" top="27px" right="27px" zIndex={2000}>
          <MobileSidebarButton onClick={toggleMenu} isOpen={isOpen} />
        </Box>
      )}

      <AnimatePresence>
        {isOpen && (
          <Portal>
            <Box position="fixed" top={0} right={0} width="100vw" height="100vh" zIndex={1000} onClick={toggleMenu}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <Box
                  position="fixed"
                  top={0}
                  right={0}
                  width="100vw"
                  height="100vh"
                  bg="rgba(0, 0, 0, 0.6)"
                  zIndex={2000}
                  onClick={toggleMenu}
                >
                  <Flex
                    direction="column"
                    color="white"
                    bg="gray.900"
                    height="100%"
                    width="100%"
                    position="absolute"
                    top={0}
                    right={0}
                    boxShadow="lg"
                    zIndex={1001}
                    onClick={e => e.stopPropagation()}
                  >
                    <Box>
                      <Flex width="100%" height="77px" pl={{ base: '3.5%', sm: '5%', lg: '3%' }} alignItems="center">
                        <Image width={60} height={60} src="/logo.webp" objectFit="contain" alt="bain-logo" />
                      </Flex>

                      <Box position="absolute" top="27px" right="27px" zIndex={2001}>
                        <MobileSidebarButton onClick={toggleMenu} isOpen={isOpen} />
                      </Box>

                      <Stack
                        align="center"
                        justifyContent="center"
                        height="calc(100vh - 77px - 80px - 24px)"
                        spacing={{ base: 6, md: 8 }}
                        fontSize={18}
                        fontWeight="500"
                        p={{ base: 4, sm: 5 }}
                      >
                        <Stack spacing={6}>
                          <RulesButton />
                          <LiveGameButton />
                          <BuyVipButton />
                        </Stack>

                        <Flex width="100%" height="77px" px={{ base: 4, sm: 5 }} alignItems="center">
                          <Stack
                            spacing={4}
                            position="absolute"
                            left="50%"
                            bottom={{ base: 4, sm: 5 }}
                            transform="translateX(-50%)"
                          >
                            <SelectLanguage mobile={true} />
                          </Stack>
                        </Flex>
                      </Stack>
                    </Box>
                  </Flex>
                </Box>
              </motion.div>
            </Box>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
