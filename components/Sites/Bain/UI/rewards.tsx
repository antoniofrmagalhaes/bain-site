'use client';

import { Box, Text, List, ListItem, Link } from '@chakra-ui/react';

export default function Rewards({ tableBg = 'rgba(255,255,255,0.03)', borderColor = 'rgba(255,255,255,0.12)' }) {
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
        Recompensas
      </Text>
      <Text mb={3}>
        As premiações das partidas ranqueadas são exclusivas para cada temporada. Os melhores colocados recebem
        benefícios, reconhecimento especial e um lugar garantido no mural dos campeões!
      </Text>
      <List spacing={3} fontSize="md" mb={4}>
        <ListItem>
          <b>1º Lugar:</b> Passe de Temporada (3 meses de VIP) + Skin exclusiva do jogo.
        </ListItem>
        <ListItem>
          <b>2º e 3º Lugar:</b> 1 mês de VIP + Skin exclusiva do jogo.
        </ListItem>
        <ListItem>
          <b>Mural dos Campeões:</b> Os <b>50 primeiros colocados</b> serão eternizados no mural dos melhores jogadores
          da temporada.
        </ListItem>
        <ListItem>
          <b>Sorteio especial:</b> Todos os membros que comprarem o Passe de Temporada (3 meses de VIP) participarão, ao
          final da temporada, do sorteio de um headset gamer. Veja todos os detalhes em{' '}
          <Link href="/premiacoes" color="yellow.300" fontWeight="bold">
            premiações da temporada
          </Link>
          .
        </ListItem>
      </List>
      <Text fontSize="sm" color="yellow.300" fontWeight="bold" mb={1}>
        Observação:
      </Text>
      <Text fontSize="sm" color="gray.300">
        Caso algum premiado já possua a skin oferecida, poderá transferi-la para outro jogador de sua escolha. A
        premiação não será convertida em outra recompensa ou valor.
      </Text>
      <Text fontSize="sm" color="gray.400" mt={3}>
        Consulte sempre as{' '}
        <Link href="/regras" color="yellow.300" fontWeight="bold">
          regras
        </Link>{' '}
        para garantir sua premiação!
      </Text>
    </Box>
  );
}
