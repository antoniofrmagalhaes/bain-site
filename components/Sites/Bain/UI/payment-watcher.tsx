'use client';

import { useEffect, useState } from 'react';
import { Box, Spinner, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

const MotionBox = motion(Box);

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

function deleteCookie(name: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; Max-Age=0; path=/`;
}

export default function PaymentWatcher() {
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [status, setStatus] = useState<'IDLE' | 'PENDING' | 'COMPLETED' | 'FAILED'>('IDLE');
  const [visible, setVisible] = useState(true);
  const [, setAttempts] = useState(0);

  useEffect(() => {
    const id = getCookie('transaction_id');
    if (id) {
      setTransactionId(id);
      setStatus('PENDING');
      setVisible(true);
      setAttempts(0);
    }
  }, []);

  useEffect(() => {
    if (!transactionId || status !== 'PENDING') return;
    const interval = setInterval(() => {
      setAttempts(prev => {
        const next = prev + 1;
        if (next >= 3) {
          setStatus('COMPLETED');
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [transactionId, status]);

  useEffect(() => {
    if (status === 'COMPLETED') {
      deleteCookie('transaction_id');
    }
    if (status === 'FAILED') {
      deleteCookie('transaction_id');
    }
  }, [status]);

  const show = Boolean(transactionId && visible && (status === 'PENDING' || status === 'COMPLETED'));

  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          position="fixed"
          right={{ base: 4, md: 6 }}
          bottom={{ base: 4, md: 6 }}
          zIndex={50}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <Box
            bg="gray.800"
            color="white"
            borderRadius="md"
            boxShadow="xl"
            w={{ base: '90vw', sm: '380px' }}
            maxW="420px"
            p={4}
            borderWidth={status === 'COMPLETED' ? 1 : 0}
            borderColor={status === 'COMPLETED' ? 'green.400' : 'transparent'}
          >
            <HStack justify="space-between" align="start">
              <HStack spacing={3}>
                {status === 'PENDING' ? (
                  <Spinner size="sm" />
                ) : (
                  <CheckCircle size={18} color="var(--chakra-colors-green-400)" />
                )}
                <Text fontWeight={700}>{status === 'PENDING' ? 'Aguardando pagamento' : 'Pagamento confirmado'}</Text>
              </HStack>
              <IconButton
                aria-label="Fechar"
                onClick={() => {
                  setVisible(false);
                  setStatus('IDLE');
                  setTransactionId(null);
                }}
                size="sm"
                variant="ghost"
                color="gray.300"
                _hover={{ color: 'white', bg: 'whiteAlpha.100' }}
                icon={<X size={18} />}
              />
            </HStack>

            {status === 'PENDING' && (
              <VStack align="start" spacing={2} mt={3}>
                <Text fontSize="sm" color="gray.200">
                  Pague o boleto/PIX do link que você abriu. Ao confirmar o pagamento, seu VIP é ativado automaticamente
                  e aparecerá aqui.
                </Text>
                <Text fontSize="xs" color="gray.400">
                  Você pode fechar este aviso, mas é recomendável mantê-lo aberto até concluir o pagamento para
                  acompanhar a confirmação em tempo real.
                </Text>
                {transactionId && (
                  <Text fontSize="xs" color="gray.500">
                    Transação: {transactionId}
                  </Text>
                )}
              </VStack>
            )}

            {status === 'COMPLETED' && (
              <VStack align="start" spacing={2} mt={3}>
                <Text fontSize="sm" color="gray.200">
                  Seu VIP foi ativado automaticamente. Você pode fechar esta janela.
                </Text>
                {transactionId && (
                  <Text fontSize="xs" color="gray.500">
                    Transação: {transactionId}
                  </Text>
                )}
              </VStack>
            )}
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  );
}
