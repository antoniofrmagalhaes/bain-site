'use client';

import { Box, Text, Link, List, ListItem } from '@chakra-ui/react';

export default function SupportContact({ tableBg = 'rgba(255,255,255,0.03)', borderColor = 'rgba(255,255,255,0.12)' }) {
  return (
    <Box
      width="100%"
      bg={tableBg}
      borderRadius="2xl"
      border="1px solid"
      borderColor={borderColor}
      overflow="hidden"
      shadow="md"
      px={6}
      py={6}
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Suporte &amp; Contato
      </Text>
      <Text mb={3}>Precisa de ajuda ou quer falar com a equipe de administração?</Text>
      <List spacing={3} fontSize="md" mb={4}>
        <ListItem>
          <b>Discord oficial:</b>{' '}
          <Link href="https://discord.gg/seu-link" color="yellow.200" isExternal fontWeight="bold">
            Entrar no Discord
          </Link>
        </ListItem>
        <ListItem>
          <b>E-mail:</b> suporte@brasilhell.com
        </ListItem>
      </List>
      <Text fontSize="sm" color="gray.300">
        Estamos prontos para te ajudar! Use o Discord para respostas mais rápidas.
      </Text>
    </Box>
  );
}
