'use client';

import React from 'react';

import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';

export default function BuyVipConditionsBox() {
  return (
    <Box
      bg="#181818"
      borderRadius="md"
      border="1px solid #262626"
      p={4}
      color="#f1f1f1"
      fontSize="15px"
      maxW="530px"
      mt={3}
    >
      <Flex align="flex-start" gap={2}>
        <Box flex="1">
          <Text fontWeight="semibold" color="#f1f1f1" mb={1}>
            Condições para comprar VIP:
          </Text>
          <List spacing={1} pl={0} pt={2}>
            <ListItem display="flex" alignItems="center" fontSize="12px" color="#f1f1f1">
              <Box as="span" mr={2} color="#f1f1f1">
                •
              </Box>
              Usuário deve ter jogado pelo menos 1 vez no servidor (aparecer como ativo).
            </ListItem>
            {process.env.NEXT_PUBLIC_VIP_ALLOW_OVERLAP === 'false' && (
              <ListItem display="flex" alignItems="center" fontSize="12px" color="#f1f1f1">
                <Box as="span" mr={2} color="#f1f1f1">
                  •
                </Box>
                Usuários já com VIP ativo não podem comprar novo VIP.
              </ListItem>
            )}
            <ListItem display="flex" alignItems="center" fontSize="12px" color="#f1f1f1">
              <Box as="span" mr={2} color="#f1f1f1">
                •
              </Box>
              IDs não encontrados ou inválidos não podem prosseguir com a compra.
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
}
