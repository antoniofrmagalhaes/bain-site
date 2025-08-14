'use client';

import { Box, Text, List, ListItem, Link } from '@chakra-ui/react';

export default function HowToPlay({ tableBg = 'rgba(255,255,255,0.03)', borderColor = 'rgba(255,255,255,0.12)' }) {
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
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Como Funciona
      </Text>

      <Text my={6}>
        As partidas ranqueadas do servidor <b>BRASIL HELL | BAIN</b> são uma oportunidade semanal de competir de forma
        organizada, com rankings e recompensas.
      </Text>

      <List spacing={3} fontSize="md" mb={4}>
        <ListItem>
          <b>1.</b> Entre no servidor <b>BRASIL HELL | BAIN</b> no{' '}
          <Link color="yellow.200" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            horário determinado pela organização
          </Link>
          .
        </ListItem>
        <Text fontSize="sm" color="gray.50" fontWeight="bold" mb={4}>
          Atenção: A partida comporta até 100 jogadores (50x50). Em caso de servidor cheio, só será possível entrar caso
          outro jogador saia ou seja expulso por inatividade. Conecte-se com antecedência para não perder sua vaga. O
          sistema de acesso VIP funciona normalmente — jogadores VIP têm prioridade de entrada.
        </Text>
        <ListItem>
          <b>2.</b> Ao entrar no horário determinado, jogue normalmente (mas dê o seu melhor — os melhores jogadores
          receberão premiações).
        </ListItem>
        <ListItem>
          <b>3.</b> Após o encerramento da partida ranqueada, a equipe irá processar os dados e mostrar o ranking
          atualizado{' '}
          <Link color="yellow.200" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
            aqui
          </Link>
          .
        </ListItem>
      </List>

      <Text fontSize="sm" color="gray.300" mb={2}>
        Lembre-se: Jogar com comprometimento e espírito de equipe é o que define os grandes jogadores. Mantenha-se
        atento aos anúncios e respeite as orientações para garantir sua participação e pontuação.
      </Text>
    </Box>
  );
}
