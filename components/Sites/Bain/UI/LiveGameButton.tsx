import { useApplication } from '@/contexts/ApplicationContext';
import { Link, Text, HStack, Box, Button } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

export default function LiveGameButton() {
  const { pageContent } = useApplication();

  // Define a animação "shockwave" usando keyframes
  const shockwave = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  `;

  // Número de ondas para criar o efeito contínuo
  const numberOfWaves = 3;
  // Intervalo entre cada onda em segundos
  const waveInterval = 0.2;

  return (
    <Link href="https://ranking.bainclan.com.br" isExternal>
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
        <HStack spacing={3} align="center">
          <Text cursor="pointer" color="white" fontSize="14px">
            {pageContent.layouts.header.rightNav.links[1].label}
          </Text>
          <Box position="relative" width="5px" height="5px">
            {Array.from({ length: numberOfWaves }).map((_, index) => (
              <Box
                key={index}
                position="absolute"
                top="0"
                left="0"
                width="5px"
                height="5px"
                borderRadius="50%"
                bg="red"
                sx={{
                  animation: `${shockwave} 1s linear infinite`,
                  animationDelay: `${index * waveInterval}s`,
                }}
              />
            ))}
          </Box>
        </HStack>
      </Button>
    </Link>
  );
}
