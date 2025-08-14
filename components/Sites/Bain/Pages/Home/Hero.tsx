import { BsDiscord, BsInstagram, BsTiktok, BsYoutube } from 'react-icons/bs';

import { useApplication } from '@/contexts/ApplicationContext';
import { Stack, Text, Flex, HStack, Image, Center, useMediaQuery, Box, Link } from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MotionHStack = motion(HStack);
const MotionText = motion(Text);
const MotionImage = motion(Image);

export default function Hero() {
  const { pageContent } = useApplication();

  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  return (
    <Flex
      position="relative"
      width="100%"
      py={{ base: 8 }}
      px={{ base: '3.5%', sm: '5%', lg: '3%' }}
      alignItems="center"
      overflow="hidden"
      minHeight="100vh"
    >
      <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={1}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(6px)',
          }}
        >
          <source src="/VIDEO_PROMO_BAIN_8mb.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </Box>

      <MotionHStack spacing={12} width="100%" alignItems="center" zIndex={2}>
        <Stack spacing={8} flex={1} color="white">
          <Stack spacing={4} maxWidth={{ base: '600px' }}>
            <MotionText
              as="small"
              fontSize={{ base: 18, lg: 20 }}
              color="brand.500"
              fontWeight={500}
              textTransform="uppercase"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {pageContent.pages.home.hero.smallText}
            </MotionText>

            <MotionText
              lineHeight={{ base: '52px', sm: '62px', lg: '70px' }}
              fontSize={{ base: 38, sm: 44, lg: 64 }}
              fontWeight={700}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.15, ease: 'easeOut' }}
              css={{
                '@media(max-height: 767px)': {
                  fontSize: '44px',
                },
              }}
            >
              {pageContent.pages.home.hero.heading}
            </MotionText>

            <MotionText
              fontSize={{ base: 16, sm: 20, lg: 24 }}
              fontWeight={300}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.15, ease: 'easeOut' }}
            >
              {pageContent.pages.home.hero.subheading}
            </MotionText>
          </Stack>

          <Stack spacing={4}>
            <Text>Siga nossas redes sociais</Text>
            <MotionHStack
              alignItems={{ base: 'flex-start', md: 'initial' }}
              spacing={4}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.15, ease: 'easeOut' }}
              fontSize={26}
              gap={6}
              css={{
                svg: {
                  cursor: 'pointer',
                },
                'svg:hover': {
                  color: '#FFB430',
                },
              }}
            >
              <Link href="https://discord.gg/bainclan" isExternal>
                <BsDiscord />
              </Link>
              <Link href="https://www.youtube.com/@hll.bainclan" isExternal>
                <BsYoutube />
              </Link>
              <Link href="https://www.instagram.com/bastardos.inglorios_bain/" isExternal>
                <BsInstagram />
              </Link>
              <Link href="https://www.tiktok.com/@bain.clan?_t=ZM-8ticPEkF0bd&_r=1" isExternal>
                <BsTiktok />
              </Link>
            </MotionHStack>
          </Stack>
        </Stack>

        {isLargerThan1024 && (
          <Center flex={1} zIndex={2}>
            <MotionImage
              width="500px"
              height="500px"
              src="logo.webp"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </Center>
        )}
      </MotionHStack>
    </Flex>
  );
}
