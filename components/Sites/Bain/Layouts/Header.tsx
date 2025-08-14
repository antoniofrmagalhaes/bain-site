import Image from 'next/image';

import { Flex, Box, HStack } from '@chakra-ui/react';

import BuyVipButton from '../UI/BuyVip/BuyVipButton';
import LiveGameButton from '../UI/LiveGameButton';
import MobileSidebar from '../UI/MobileSidebar';
import RulesButton from '../UI/RulesButton';
import SelectLanguage from '../UI/SelectLanguage';

export default function Header() {
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      right={0}
      left={0}
      zIndex={5}
      bg="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(2px)"
      boxShadow="sm"
    >
      <Flex px={{ base: '3.5%', sm: '5%', lg: '3%' }} height="77px" align="center" justify="space-between">
        <HStack spacing={12}>
          <Box display={{ base: 'initial', lg: 'none' }}>
            <Image width={60} height={60} src="/logo.webp" objectFit="contain" alt="bain-logo" />
          </Box>
          <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}></HStack>
        </HStack>

        <HStack spacing={6} display={{ base: 'none', lg: 'flex' }}>
          {/* <Link href={'/ranking'}>
            <Button
              variant="link"
              cursor="pointer"
              color="white"
              fontSize={{ base: 18, lg: 14 }}
              fontWeight={500}
              _hover={{
                color: 'brand.500',
              }}
            >
              TEMPORADA 2025
            </Button>
          </Link> */}
          <RulesButton />
          <LiveGameButton />
          <BuyVipButton />
          <SelectLanguage />
        </HStack>

        <Box display={{ base: 'block', lg: 'none' }}>
          <MobileSidebar />
        </Box>
      </Flex>
    </Box>
  );
}
