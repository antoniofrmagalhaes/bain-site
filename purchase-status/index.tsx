'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { api } from '@/services/httpClient';
import {
  Box,
  Flex,
  Spinner,
  Text,
  Progress,
  VStack,
  Icon,
  Heading,
  useColorModeValue,
  ScaleFade,
  SlideFade,
} from '@chakra-ui/react';

import { CheckCircle, Timer } from 'lucide-react';
import { parseCookies, destroyCookie } from 'nookies';

export default function PurchaseStatusPage() {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const { transactionId } = parseCookies();

    if (!transactionId) {
      router.replace('/');
      return;
    }

    const interval = setInterval(async () => {
      try {
        const response = await api.get(`/status/${transactionId}`);
        if (response.data.status === 'COMPLETED') {
          setCompleted(true);
          destroyCookie(null, 'transactionId');
          clearInterval(interval);
          setTimeout(() => router.push('/'), 5000);
        }
      } catch (error) {
        console.error('Erro ao verificar status da transação:', error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [router]);

  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Flex minH="100vh" align="center" justify="center" bg={bg} px={4} py={12}>
      <Box bg="gray.800" color="white" rounded="lg" shadow="lg" p={[6, 10]} maxW="lg" w="full" textAlign="center">
        {completed ? (
          <ScaleFade initialScale={0.95} in={true}>
            <VStack spacing={6}>
              <Icon as={CheckCircle} boxSize={20} color="green.400" />
              <Heading fontSize="2xl">Pagamento Confirmado</Heading>
              <Text color="gray.300" fontSize="md">
                Parabéns! Seu acesso VIP já está ativo e tudo pronto para a batalha.
              </Text>
              <Text fontSize="sm" color="gray.400">
                Você será redirecionado automaticamente em instantes...
              </Text>
              <Progress size="sm" colorScheme="green" width="100%" borderRadius="full" isIndeterminate />
            </VStack>
          </ScaleFade>
        ) : (
          <SlideFade in={true} offsetY="20px">
            <VStack spacing={6}>
              <Icon as={Timer} boxSize={20} color="yellow.400" />
              <Heading fontSize="2xl">Aguardando Confirmação</Heading>
              <Text color="gray.300" fontSize="md">
                Estamos processando o pagamento. Isso pode levar alguns segundos.
              </Text>
              <Text fontSize="sm" color="gray.400">
                Por favor, não feche esta aba até a confirmação automática.
              </Text>
              <Spinner size="xl" thickness="4px" color="brand.500" />
            </VStack>
          </SlideFade>
        )}
      </Box>
    </Flex>
  );
}
