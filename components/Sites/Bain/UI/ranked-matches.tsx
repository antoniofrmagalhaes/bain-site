'use client';

import { Dispatch, SetStateAction } from 'react';

import { Box, Text, List, ListItem, Link, Divider } from '@chakra-ui/react';

type RankedMatchesProps = {
  tableBg?: string;
  borderColor?: string;
  setViewIndex: Dispatch<SetStateAction<number>>;
};

export default function RankedMatches({
  tableBg = 'rgba(255,255,255,0.03)',
  borderColor = 'rgba(255,255,255,0.12)',
  setViewIndex,
}: RankedMatchesProps) {
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
      <Text fontSize="2xl" fontWeight="extrabold" letterSpacing="tight">
        PARTIDAS COMPETITIVAS
      </Text>
      <Text fontSize="md" mb={4}>
        As partidas competitivas são a única forma de pontuar no ranking oficial global e acontecem em datas, horários e
        em quantidades definidos pela administração. Para mais informações, consulte o nosso{' '}
        <Link color="yellow.200" fontWeight={700} _hover={{ textDecoration: 'underline' }}>
          calendário
        </Link>{' '}
        .
      </Text>

      <Divider my={3} borderColor="gray.600" />

      <List spacing={3} fontSize="md" mb={4}>
        <ListItem>
          <b>Informações de temporada:</b>
          <List spacing={4} fontSize="sm" pl={4} mt={2}>
            <ListItem>
              As partidas campetitivas seguem o calendário oficial da temporada divulgado pela administração. Exemplo:
            </ListItem>

            <ListItem>
              <b>Período:</b> Todo final de semana (Sábado e Domingo). Do dia 5 de julho até 26 de julho de 2025.
            </ListItem>

            <ListItem>
              <b>Horário de início:</b> 21h (horário de Brasília).
            </ListItem>

            <ListItem>
              <b>Modo de jogo:</b> Guerra.
            </ListItem>

            <ListItem>
              <b>Mapas:</b> Sainte-Mère-Église, Utah Beach, Omaha Beach, Carentan, Foy, Hurtgen Forest, Hill 400, Purple
              Heart Lane, El Alamein, Kursk, Kharkov, Stalingrado, Remagen, St. Marie du Mont, Tobruk, Driel.
              <br />
              <Text as="span" color="gray.400" fontSize="xs">
                As variantes podem incluir versões diurnas, noturnas e ofensivas, conforme o sistema automático do
                servidor.
              </Text>
            </ListItem>

            <ListItem>
              <b>Lotação:</b> 49x49 jogadores. Dois slots são reservados para administradores (máximo de 100 jogadores
              no servidor).
            </ListItem>

            <ListItem>
              <b>Duração:</b> Até <b>1 hora e 30 minutos</b>.
            </ListItem>

            <ListItem>
              <b>Número de partidas por dia:</b> <b>3</b>
            </ListItem>
          </List>
        </ListItem>

        <ListItem>
          Jogadores presentes no servidor receberão avisos momentos antes do início da partida competitiva. Aqueles que
          não desejarem participar podem sair antecipadamente para evitar que sua pontuação seja processada.
        </ListItem>

        <ListItem>
          Todas as partidas competitivas contarão com a presença de um administrador, que acompanhará o jogo para
          garantir que as{' '}
          <Link
            color="yellow.200"
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            onClick={() => setViewIndex(3)}
          >
            regras
          </Link>{' '}
          sejam seguidas rigorosamente durante toda a partida.
        </ListItem>

        <ListItem>
          Após o encerramento da partida, as estatísticas dos jogadores serão processadas automaticamente e o ranking
          será atualizado em tempo real nesta página. Veja detalhes sobre{' '}
          <Link
            href="/como-funciona-ranking"
            color="yellow.200"
            _hover={{ textDecoration: 'underline' }}
            fontWeight={700}
          >
            como o ranking é processado
          </Link>
          .
        </ListItem>

        <ListItem>
          Em caso de desconexão, a pontuação será computada até o momento da queda, desde que o jogador tenha
          permanecido por mais de <b>5 minutos</b> em campo. Se ele conseguir retornar à mesma partida, o tempo total
          ativo será considerado normalmente.
        </ListItem>
      </List>

      <Divider my={3} borderColor="gray.600" />

      <Text fontSize="sm" color="gray.300" mb={2}>
        Fique atento aos avisos no Discord e no servidor para não perder sua chance de pontuar!
      </Text>
      <Text fontSize="sm" color="gray.300">
        <b>Privacidade:</b> Todos os dados exibidos neste site são provenientes de informações públicas da Steam e do
        próprio jogo. Caso algum jogador não deseje ter seu nome, estatísticas ou informações associadas ao ranking
        exibidas na plataforma, basta entrar em contato diretamente pelo{' '}
        <Link href="/suporte" color="yellow.200" _hover={{ textDecoration: 'underline' }} fontWeight={700}>
          canal de suporte
        </Link>
        . Jogar no servidor implica concordância com nossas regras e termos de uso.
      </Text>
    </Box>
  );
}
