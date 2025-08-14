'use client';

import { Dispatch, SetStateAction } from 'react';

import { Box, Text, Link, Divider } from '@chakra-ui/react';

type HowItWorksProps = {
  tableBg?: string;
  borderColor?: string;
  setViewIndex: Dispatch<SetStateAction<number>>;
};

export default function HowItWorks({
  tableBg = 'rgba(255,255,255,0.03)',
  borderColor = 'rgba(255,255,255,0.12)',
  setViewIndex,
}: HowItWorksProps) {
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
        COMO FUNCIONA
      </Text>

      <Divider borderColor="gray.600" />
      <Text my={6}>
        Durante algumas épocas do ano, a BAIN propõe{' '}
        <Link
          color="yellow.200"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setViewIndex(2)}
        >
          partidas mais competitivas
        </Link>{' '}
        para jogadores casuais no nosso servidor, visando oferecer à comunidade uma experiência mais imersiva e
        estratégica. A organização determinará períodos em que algumas partidas específicas serão computadas, e os
        jogadores que participarem dessas partidas entrarão em um sistema de ranking global com direito a premiações
        para os 3 melhores jogadores da temporada. As partidas estarão acessíveis a todos os jogadores ativos — desde
        que não tenham sofrido nenhum tipo de punição nos últimos 30 dias — e que estejam de acordo com as{' '}
        <Link
          color="yellow.200"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setViewIndex(3)}
        >
          regras
        </Link>
        .
      </Text>

      <Text my={4}>
        Para cada temporada, a organização definirá previamente os mapas oficiais, a data, o horário e a quantidade de
        partidas válidas. Essas partidas serão acompanhadas por moderadores e analisadas com rigor para garantir que as
        regras sejam estritamente cumpridas. Após cada rodada, os dados dos jogadores serão processados pelo nosso
        sistema de avaliação, e a{' '}
        <Link
          color="yellow.200"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setViewIndex(0)}
        >
          <b>lista com os 100 melhores colocados da temporada</b>
        </Link>{' '}
        será atualizada automaticamente após cada partida durante o período da temporada.
      </Text>

      <Text fontSize="md" mb={6}>
        Os jogadores que mais se destacarem durante as partidas ranqueadas disputarão os <b>1º, 2º e 3º lugares</b> da
        temporada. Os <b>3 primeiros colocados</b> receberão{' '}
        <Link
          color="yellow.200"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setViewIndex(5)}
        >
          recompensas exclusivas
        </Link>{' '}
        ao final do ciclo, e os <b>50 melhores jogadores</b> serão oficialmente registrados como os destaques daquela
        temporada.
      </Text>

      <Divider mb={3} borderColor="gray.600" />

      <Text fontSize="sm" color="gray.300">
        Todo o processo é monitorado por moderadores e automatizado pelo sistema. Qualquer violação das regras pode
        resultar na remoção imediata do jogador da temporada.
      </Text>
    </Box>
  );
}
