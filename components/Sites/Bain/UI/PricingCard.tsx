import React from 'react';
import { FaCrown } from 'react-icons/fa';

import { Switch, Box, Text, Flex, Badge, VStack, HStack, Button, Stack } from '@chakra-ui/react';

const PricingCard: React.FC = () => {
  const [isAnnual, setIsAnnual] = React.useState(false);

  return (
    <Flex
      flexDirection="column"
      p={6}
      w="100%"
      height="100%"
      justifyContent="space-between"
      color="gray.200"
      mx="auto"
      position="relative"
    >
      <Stack spacing={4}>
        {/*  <HStack>
          <Text fontSize="24px" fontWeight="bold" lineHeight="1.2">
            PLANO VIP
          </Text> 
         <HStack flex={1} justifyContent="flex-end">
            <Text fontSize="12px" fontWeight="medium">
              Plano Trimestral
            </Text>
            <Switch isChecked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} colorScheme="yellow" size="md" />
          </HStack> 
        </HStack>*/}
        <Stack spacing={0}>
          <HStack spacing={2} alignItems="center">
            <Box
              bg="yellow.500"
              color="white"
              borderRadius="md"
              p={1}
              boxSize="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaCrown size={10} />
            </Box>
            <Text fontSize="20px" fontWeight="semibold">
              Acesso VIP
            </Text>
            <Badge bg="green.500" color="white" borderRadius="full" px={2} py={0.5} fontSize="xs" fontWeight="medium">
              Sem Fila
            </Badge>
          </HStack>
          <Text fontSize="12px" color="gray.200" lineHeight="1.5">
            Ao adquirir seu VIP, você se despede das filas e avança diretamente para o campo de batalha.
          </Text>
        </Stack>
      </Stack>

      {/* Cost Breakdown */}
      <VStack spacing={4} align="stretch">
        <Flex justifyContent="space-between">
          <Text fontSize="12px" fontWeight="medium">
            PLANO
          </Text>
          <HStack flex={1} justifyContent="flex-end">
            <Text fontSize="12px" fontWeight="medium">
              Plano Trimestral
            </Text>
            <Switch isChecked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} colorScheme="yellow" size="md" />
          </HStack>
        </Flex>
        <Flex justify="space-between">
          <Text fontSize="12px">SUBTOTAL</Text>
          <Text fontSize="12px">{isAnnual ? 'R$ 45,00' : 'R$ 15,00'}</Text>
        </Flex>
        {isAnnual && (
          <Flex justify="space-between">
            <Text fontSize="12px">DESCONTO</Text>
            <Text fontSize="12px" color="green.500">
              R$ -5,00
            </Text>
          </Flex>
        )}
        {/* {isAnnual && (
          <Flex justify="space-between">
            <Text fontSize="12px" color="green.400">
              Economize com o plano trimestral
            </Text>
            <Text fontSize="12px">$ 40,00/3 meses</Text>
          </Flex>
        )} */}
        <Flex justify="space-between">
          <Text fontSize="16px" fontWeight="bold">
            TOTAL DO PLANO
          </Text>
          <Text fontSize="16px" fontWeight="bold">
            {isAnnual ? '$ 40,00' : '$ 15,00'}
          </Text>
        </Flex>
        <Button
          size={{ base: 'sm', md: 'md' }}
          background="brand.500"
          borderWidth={1}
          borderColor="brand.500"
          boxShadow="md"
          _hover={{ backgroundColor: 'brand.500', color: 'black' }}
          _active={{ boxShadow: 'none' }}
        >
          <Text fontWeight={500} fontSize={{ base: 12, md: 15 }}>
            FINALIZAR COMPRA
          </Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default PricingCard;
