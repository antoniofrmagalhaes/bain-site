'use client';

import { Dispatch, SetStateAction } from 'react';

import { Box, Text, List, ListItem, Divider, Link, Stack } from '@chakra-ui/react';

type RulesProps = {
  tableBg?: string;
  borderColor?: string;
  setViewIndex: Dispatch<SetStateAction<number>>;
};

export default function Rules({
  tableBg = 'rgba(255,255,255,0.03)',
  borderColor = 'rgba(255,255,255,0.12)',
  setViewIndex,
}: RulesProps) {
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
        REGRAS GERAIS
      </Text>
      <Text fontSize="md" mb={4}>
        As regras a seguir foram estabelecidas para garantir o bom funcionamento das{' '}
        <Link
          color="yellow.200"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
          onClick={() => setViewIndex(2)}
        >
          partidas competitivas
        </Link>{' '}
        e proporcionar uma experiência imersiva, justa, limpa e equilibrada para todos os participantes.
      </Text>

      <Divider my={3} borderColor="gray.600" />

      <Text fontSize="xl" fontWeight="bold">
        Regras de Conduta
      </Text>

      <List spacing={2} fontSize="md" mt={4} mb={4}>
        <ListItem>
          <b>Proibido xingamentos, atos racistas, xenofóbicos, homofóbicos ou similares em qualquer chat.</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            O moderador pode expulsar imediatamente o jogador por conduta inadequada. Em casos graves, será avaliada a
            aplicação de banimento temporário ou permanente do servidor ou das partidas competitivas.
          </span>
        </ListItem>
        <ListItem>
          <b>
            Cheats (HACK), ferramentas para vantagem ou qualquer prática antijogo resultarão em expulsão imediata e
            banimento permanente.
          </b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Qualquer uso de trapaças, programas externos, exploits ou práticas que desrespeitem o espírito competitivo
            será punido com remoção instantânea da partida e banimento permanente do servidor.
          </span>
        </ListItem>
        <ListItem>
          <b>É proibido streamar as partidas competitivas; apenas membros oficiais poderão transmitir.</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Transmissões não autorizadas podem prejudicar a integridade da competição e resultar em punições para o
            jogador.
          </span>
        </ListItem>
        <ListItem>
          <b>O uso do microfone é obrigatório durante as partidas competitivas.</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Comunicação por voz é regra no competitivo: combine estratégias, reporte situações e responda às chamadas do
            seu time. Quem joga sem microfone, não interage ou se recusa a comunicar pode ser expulso da partida.
          </span>
        </ListItem>
        <ListItem>
          <b>Abuso de VOIP ou rádio (flood, spam, música)</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            O uso inadequado dos canais de voz, como excesso de ruído, spam ou música, afeta o desempenho do time e será
            tratado com rigor. conforme a transgreção, o jogador será punido com expulsão imediata ou ban, conforme a
            gravidade.
          </span>
        </ListItem>
        <ListItem>
          <b>Teamkilling (TK) intencional ou retaliação</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Matar aliados propositalmente ou resultado de um tk intencional ou não intencional resultará em expulsão
            imediata da partida. Em caso de reincidência, o jogador poderá receber banimento temporário ou permanente do
            ranking e do servidor.
            <br />
          </span>
        </ListItem>
        <ListItem>
          <b>Troll ou comportamento anti-jogo</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Jogadores que sabotam, prejudicam propositalmente o time ou têm atitudes anti-jogo serão expulsos
            imediatamente da partida ranqueada. Se houver reincidência, poderão ser banidos temporariamente ou
            permanentemente do ranking e do servidor.
          </span>
        </ListItem>
        <ListItem>
          <b>Proíbidos nomes ofensivos, propagandistas ou inapropriados</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Nomes impróprios não serão tolerados, podendo ocasionar expulsão imediata e punições adicionais dependendo
            da gravidade.
          </span>
        </ListItem>
        <ListItem>
          <b>Ameaças ou doxxing resultam em ban imediato.</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Qualquer forma de ameaça, exposição de dados pessoais ou coação leva ao banimento sem aviso prévio.
          </span>
        </ListItem>
      </List>

      <Divider my={3} borderColor="gray.600" />

      <Text fontSize="xl" fontWeight="bold">
        Regras de Infantaria
      </Text>

      <List spacing={2} fontSize="md" mt={4} mb={4}>
        <ListItem>
          <b>Comando:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>Para a função de Comando, o nível mínimo é 50.</span>
        </ListItem>
        <ListItem>
          <b>Oficial:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>Para a função de Oficial, o nível mínimo é 35.</span>
        </ListItem>
        <ListItem>
          <b>Vigia:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>Para a função de Vigia, o nível mínimo é 35.</span>
        </ListItem>
      </List>

      <Stack spacing={0}>
        <Text fontSize="xl" fontWeight="bold">
          Regras de Blindados
        </Text>
        <Text>O uso de tanques deve sempre priorizar o equilíbrio da equipe e seguir a orientação do comandante.</Text>
      </Stack>

      <List spacing={2} fontSize="md" mt={4} mb={4}>
        <ListItem>
          <b>Tanques solo:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Permitidos apenas se não houver squads de tanque disponíveis na partida.
          </span>
        </ListItem>
        <ListItem>
          <b>Squads com 2 jogadores:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            Podem operar tanques médios e pesados, mas tanques pesados têm prioridade para squads completos de 3
            jogadores.
          </span>
        </ListItem>
        <ListItem>
          <b>Prioridade dos squads:</b>
          <br />
          <span style={{ color: '#aaa', fontSize: 14 }}>
            A ordem de prioridade entre squads de 3 jogadores será definida pelo comandante.
          </span>
        </ListItem>
      </List>

      <Text fontSize="sm" mb={6}>
        O não seguimento dessas diretrizes sera ser analisado por um administrador, e o jogador estará sujeito a
        advertências, expulsão da partida ou outras punições conforme a sua conduta.
      </Text>

      <Divider my={3} borderColor="gray.600" />

      <Text fontSize="md" color="gray.300">
        Durante as partidas competitivas, para relatar infrações ou ocorrências, utilize o padrão &apos;L&apos; para
        abrir o chat do esquadrão e digitar{' '}
        <Text as="span" color="green.300">
          @admin + mensagem
        </Text>{' '}
        no chat. O administrador analisará a denuncia e aplicará a punição caso necessário.
      </Text>

      <Text fontSize="md" color="gray.300">
        Ao permanecer no servidor durante partidas competitivas, você concorda com a{' '}
        <Link color="yellow.200" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
          política de uso e processamento de dados
        </Link>{' '}
        para exibição no ranking. Caso deseje anonimizar suas informações, entre em contato via nosso{' '}
        <Link color="yellow.200" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
          Discord
        </Link>{' '}
        .
      </Text>
    </Box>
  );
}
