'use client';

import { Box, Text, List, ListItem, Link } from '@chakra-ui/react';

export default function Eligibility({ tableBg = 'rgba(255,255,255,0.03)', borderColor = 'rgba(255,255,255,0.12)' }) {
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
        Elegibilidade
      </Text>
      <List spacing={3} fontSize="md" mb={4}>
        <ListItem>
          <b>Participação aberta:</b> Qualquer jogador pode competir nas partidas ranqueadas, desde que tenha decorado
          os{' '}
          <Link href="/conceitos-basicos" color="yellow.300" fontWeight="bold">
            conceitos básicos do jogo
          </Link>{' '}
          e esteja presente no servidor no momento da partida e atenda às{' '}
          <Link href="/regras" color="yellow.300" fontWeight="bold">
            regras de conduta
          </Link>
          .
          <br />
        </ListItem>
        <ListItem>
          <b>Nicknames:</b> O uso de nomes ofensivos, impróprios ou propagandistas pode resultar em exclusão da partida,
          remoção do ranking e banimento do servidor.
        </ListItem>
        <ListItem>
          <b>Steam e Fair Play:</b> Contas Steam com restrições, banimentos recentes ou envolvimento em práticas
          ilícitas não são elegíveis para premiações.
        </ListItem>
        <ListItem>
          <b>Discord obrigatório:</b> Para receber avisos, premiações e suporte, recomenda-se fortemente que o jogador
          esteja cadastrado e acompanhe o Discord oficial.
        </ListItem>
        <ListItem>
          <b>Presença durante a partida:</b> Apenas jogadores que permanecerem ativos no servidor até o fim da partida
          rankeada terão sua pontuação processada. Quedas inesperadas são avaliadas de acordo com o tempo mínimo em
          campo (mínimo 5 minutos).
        </ListItem>
      </List>
      <Text fontSize="sm" color="gray.300">
        Dúvidas? Entre em contato com a administração no Discord oficial ou abra um ticket para suporte individual.
      </Text>
    </Box>
  );
}
