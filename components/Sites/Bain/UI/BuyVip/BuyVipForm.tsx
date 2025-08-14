'use client';

import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { useForm } from 'react-hook-form';

import { api } from '@/services/httpClient';
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spinner,
  Stack,
  Text,
  VStack,
  useToast,
  Badge,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';

import { motion } from 'framer-motion';

import BuyVipConditionsBox from './BuyVipConditionsBox';
import BuyVipPlanSwitch from './BuyVipPlanSwitch';
import { BuyVipPlayerIdInput } from './BuyVipPlayerIdInput';
import { buyVipSchema, BuyVipFormValues } from './buyVipSchema';
import BuyVipSummary from './BuyVipSummary';

const MotionButton = motion(Box);

export type BuyVipFormRef = {
  resetForm: () => void;
};

type BuyVipFormProps = {};

const BuyVipForm = forwardRef<BuyVipFormRef, BuyVipFormProps>(({}, ref) => {
  const toast = useToast();
  const [isQuarterly, setIsQuarterly] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset,
    trigger,
    clearErrors,
  } = useForm<BuyVipFormValues>({
    resolver: zodResolver(buyVipSchema),
  });

  useImperativeHandle(ref, () => ({
    resetForm: () => reset(),
  }));

  const onSubmit = async (data: BuyVipFormValues) => {
    try {
      const purchasePlanType = isQuarterly ? 'QUARTERLY' : 'MONTHLY';
      const payload = {
        playerId: data.id,
        email: data.email,
        purchasePlanType,
      };
      const response = await api.post('transactions/create', payload);
      const { paymentUrl, id: transactionId } = response.data;

      // abre o link do Mercado Pago em outra aba
      window.open(paymentUrl, '_blank');

      // salva o cookie com o ID da transação
      document.cookie = `transactionId=${transactionId}; path=/; max-age=1800`; // 30min

      // redireciona para página de status
      // window.location.href = '/purchase-status';
    } catch (error: any) {
      let description = 'Ocorreu um erro ao iniciar a compra.';
      if (error?.response?.data?.message) {
        description = error.response.data.message;
      } else if (error?.message) {
        description = error.message;
      }

      toast({
        title: 'Não foi possível concluir sua compra',
        description: description + ' Tente novamente em instantes.',
        status: 'error',
        duration: 6000,
        isClosable: true,
        position: 'bottom',
        variant: 'subtle',
      });
    }
  };

  return (
    <Stack
      height="100%"
      justifyContent="space-between"
      as="form"
      onSubmit={async e => {
        e.preventDefault();
        const valid = await trigger();
        if (valid) handleSubmit(onSubmit)();
      }}
    >
      <Stack spacing={6}>
        <Stack spacing={0}>
          <HStack spacing={2} alignItems="center">
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

        <VStack spacing={4} align="stretch">
          <Box>
            <Text fontSize="smaller" color="gray.100" fontWeight="medium" mb={2}>
              Preencha os campos abaixo para gerar seu link de pagamento. Certifique-se de inserir corretamente o seu
              Steam ID para jogadores Steam ou GamePass ID para jogadores Microsoft e o e-mail.
            </Text>
          </Box>

          <FormControl isInvalid={!!errors.id}>
            <BuyVipPlayerIdInput
              value={watch('id') || ''}
              onChange={val => setValue('id', val)}
              clearErrors={clearErrors}
              error={errors.id?.message}
              userNotFoundText={
                <Flex flex="1" justifyContent="space-between" alignItems="center">
                  <Box color="red.400" fontWeight="medium">
                    Acesso Negado{' '}
                  </Box>
                </Flex>
              }
            />
            <BuyVipConditionsBox />
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <Input placeholder="Digite seu e-mail" {...register('email')} />
            <FormHelperText color="whitesmoke" fontSize="smaller">
              Informe o e-mail para receber o link de pagamento e a confirmação da ativação do VIP.
            </FormHelperText>
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </VStack>
      </Stack>

      <Stack>
        <BuyVipPlanSwitch isQuarterly={isQuarterly} setIsQuarterly={() => setIsQuarterly(!isQuarterly)} />
        <BuyVipSummary isQuarterly={isQuarterly} />
        <MotionButton
          as="button"
          type="submit"
          mt={6}
          color="gray.900"
          bg="brand.500"
          _hover={{ bg: 'brand.400' }}
          px={4}
          py={2}
          textAlign="center"
          fontWeight="bold"
          borderRadius="md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          {isSubmitting ? (
            <>
              <Box as="span">GERANDO LINK DE PAGAMENTO...</Box>
              <Box as="span" display="flex" alignItems="center">
                <Spinner size="sm" speed="0.6s" color="gray.900" />
              </Box>
            </>
          ) : (
            'GERAR LINK DE PAGAMENTO'
          )}
        </MotionButton>
      </Stack>
    </Stack>
  );
});

BuyVipForm.displayName = 'BuyVipForm';

export default BuyVipForm;
