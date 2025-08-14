import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Stack,
  Wrap,
  WrapItem,
  Badge,
  Tooltip,
} from '@chakra-ui/react';

const MAP_NAMES = [
  'St Marie Eglise',
  'Carentan',
  'Stalingrad',
  'Kharkov',
  'Utah Beach',
  'Omaha Beach',
  'Hill 400',
  'Hürtgen Forest',
  'Kursk',
  'Foy',
  'Purple Heart Lane',
  'Sainte-Mère-Église',
];

const seasonData = [
  {
    season: 'Temporada 4',
    period: 'Abril - Junho/2025',
    maps: MAP_NAMES,
    players: [
      {
        name: 'HLL_DarkWolf',
        stats: {
          Combate: 2120,
          Ataque: 1190,
          Defesa: 890,
          Suporte: 1177,
          Kills: 212,
          KD: 4.2,
          Partidas: 12,
        },
        achievements: [
          {
            title: 'Demolidor',
            description: 'Plantou 100 satchels ao longo da temporada, destruindo inúmeras estruturas inimigas.',
          },
          {
            title: 'Caçador de Blindados',
            description: 'Destruiu 30 tanques inimigos como Anti-Tank.',
          },
        ],
      },
      {
        name: 'AlphaSniper',
        stats: {
          Combate: 1955,
          Ataque: 970,
          Defesa: 1000,
          Suporte: 950,
          Kills: 178,
          KD: 3.7,
          Partidas: 11,
        },
        achievements: [
          {
            title: 'Tiro Certeiro',
            description: 'Eliminou 70 inimigos com tiros na cabeça.',
          },
        ],
      },
      {
        name: 'MedicBR',
        stats: {
          Combate: 1600,
          Ataque: 710,
          Defesa: 1100,
          Suporte: 1450,
          Kills: 120,
          KD: 2.3,
          Partidas: 10,
        },
        achievements: [
          {
            title: 'Anjo da Guarda',
            description: 'Ressuscitou mais de 200 companheiros durante a temporada.',
          },
        ],
      },
    ],
    achievements: MAP_NAMES.map((map, idx) => ({
      title: map,
      description: `Partida ranqueada realizada em ${map} na semana ${idx + 1} da temporada.`,
    })),
  },
  {
    season: 'Temporada 3',
    period: 'Janeiro - Março/2025',
    maps: MAP_NAMES,
    players: [
      {
        name: 'OldGuard_Fenix',
        stats: {
          Combate: 2060,
          Ataque: 1010,
          Defesa: 850,
          Suporte: 1200,
          Kills: 187,
          KD: 8.5,
          Partidas: 13,
        },
        achievements: [
          {
            title: 'Comandante Supremo',
            description: 'Venceu 10 partidas liderando como Commander.',
          },
        ],
      },
      {
        name: 'ScoutElite',
        stats: {
          Combate: 1740,
          Ataque: 960,
          Defesa: 900,
          Suporte: 1195,
          Kills: 130,
          KD: 2.1,
          Partidas: 12,
        },
        achievements: [
          {
            title: 'Explorador Nato',
            description: 'Descobriu e marcou 40 garagens inimigas.',
          },
        ],
      },
      {
        name: 'SupportHero',
        stats: {
          Combate: 1410,
          Ataque: 730,
          Defesa: 870,
          Suporte: 1500,
          Kills: 115,
          KD: 1.7,
          Partidas: 10,
        },
        achievements: [
          {
            title: 'Logístico de Elite',
            description: 'Construiu mais de 50 garrisons e nodes.',
          },
        ],
      },
    ],
    achievements: MAP_NAMES.map((map, idx) => ({
      title: map,
      description: `Partida ranqueada realizada em ${map} na semana ${idx + 1} da temporada.`,
    })),
  },
  {
    season: 'Temporada 2',
    period: 'Outubro - Dezembro/2024',
    maps: MAP_NAMES,
    players: [
      {
        name: 'SniperOne',
        stats: {
          Combate: 1840,
          Ataque: 870,
          Defesa: 1080,
          Suporte: 1390,
          Kills: 153,
          KD: 3.6,
          Partidas: 11,
        },
        achievements: [
          {
            title: 'Vigilante Implacável',
            description: 'Protegeu 15 setores com score máximo de defesa.',
          },
        ],
      },
      {
        name: 'TankMaster',
        stats: {
          Combate: 1400,
          Ataque: 1210,
          Defesa: 770,
          Suporte: 900,
          Kills: 98,
          KD: 2.2,
          Partidas: 9,
        },
        achievements: [
          {
            title: 'Tanqueador',
            description: 'Conduziu blindados por mais de 300 minutos em partidas decisivas.',
          },
        ],
      },
      {
        name: 'CommanderBR',
        stats: {
          Combate: 1220,
          Ataque: 620,
          Defesa: 1000,
          Suporte: 800,
          Kills: 67,
          KD: 1.8,
          Partidas: 9,
        },
        achievements: [
          {
            title: 'Estratégia Total',
            description: 'Planejou e executou ataques bem-sucedidos em todas as finais da temporada.',
          },
        ],
      },
    ],
    achievements: MAP_NAMES.map((map, idx) => ({
      title: map,
      description: `Partida ranqueada realizada em ${map} na semana ${idx + 1} da temporada.`,
    })),
  },
  {
    season: 'Temporada 1',
    period: 'Julho - Setembro/2024',
    maps: MAP_NAMES,
    players: [
      {
        name: 'Ghost_Bravo',
        stats: {
          Combate: 1590,
          Ataque: 960,
          Defesa: 710,
          Suporte: 1000,
          Kills: 99,
          KD: 2.5,
          Partidas: 8,
        },
        achievements: [
          {
            title: 'Pioneiro',
            description: 'Primeiro MVP do ranking ranqueado.',
          },
        ],
      },
      {
        name: 'MedicTop',
        stats: {
          Combate: 1220,
          Ataque: 500,
          Defesa: 690,
          Suporte: 1230,
          Kills: 76,
          KD: 1.9,
          Partidas: 8,
        },
        achievements: [
          {
            title: 'Médico Lendário',
            description: 'Bateu recorde de revives na temporada de estreia.',
          },
        ],
      },
      {
        name: 'AssaultKing',
        stats: {
          Combate: 1415,
          Ataque: 800,
          Defesa: 660,
          Suporte: 800,
          Kills: 92,
          KD: 2.2,
          Partidas: 8,
        },
        achievements: [
          {
            title: 'Assaulter',
            description: 'Maior score de ataque da temporada.',
          },
        ],
      },
    ],
    achievements: MAP_NAMES.map((map, idx) => ({
      title: map,
      description: `Partida ranqueada realizada em ${map} na semana ${idx + 1} da temporada.`,
    })),
  },
];

export default function SeasonHistoryAccordion({
  tableBg = 'rgba(255,255,255,0.03)',
  borderColor = 'rgba(255,255,255,0.12)',
}) {
  const borderColors = ['#FFD700', '#C0C0C0', '#CD7F32'];
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
        Histórico de Temporadas
      </Text>
      <Text mb={4}>
        Todas as partidas ranqueadas ficam registradas por temporada, incluindo mapas jogados, conquistas coletivas,
        estatísticas dos melhores jogadores e curiosidades marcantes de cada fase. Consulte abaixo o resumo de cada
        temporada, os campeões e as conquistas especiais que moldaram o ranking ao longo do tempo.
      </Text>

      <Stack spacing={6}>
        {seasonData.map(season => (
          <Box
            key={season.season}
            bg="rgba(255,255,255,0.03)"
            borderRadius="xl"
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
            p={5}
            width="100%"
          >
            <Text fontWeight="bold" color="gray.50" fontSize="md" mb={1}>
              {season.season}{' '}
              <Text as="span" color="gray.400" fontWeight="normal">
                | {season.period}
              </Text>
            </Text>
            <Wrap mt={2} mb={4} spacing="6px">
              {season.achievements?.map(ach => (
                <WrapItem key={ach.title}>
                  <Tooltip label={ach.description} hasArrow bg="yellow.400" color="black" fontSize="xs">
                    <Badge
                      colorScheme="white"
                      fontWeight="medium"
                      px={2}
                      py={0.5}
                      borderRadius="2xl"
                      cursor="pointer"
                      fontSize="10px"
                      lineHeight="16px"
                      borderWidth="1px"
                      borderColor="gray.700"
                      bg="rgba(0, 0, 0, 0.1)"
                      minW="auto"
                    >
                      {ach.title}
                    </Badge>
                  </Tooltip>
                </WrapItem>
              ))}
            </Wrap>
            <Accordion allowToggle borderColor="transparent">
              {season.players.map((player, idx) => (
                <AccordionItem key={player.name}>
                  <AccordionButton
                    _expanded={{
                      bg: borderColors[idx] + '22',
                      color: borderColors[idx],
                      border: '2px solid',
                      borderColor: borderColors[idx],
                    }}
                    px={0}
                    py={2}
                    borderLeftWidth="6px"
                    borderLeftStyle="solid"
                    borderLeftColor={borderColors[idx]}
                    borderRadius="md"
                    mb={2}
                    transition="border 0.2s"
                  >
                    <Box
                      flex="none"
                      fontWeight="bold"
                      fontSize="md"
                      color={borderColors[idx]}
                      mr={4}
                      minW="28px"
                      textAlign="center"
                    >
                      {idx + 1}º
                    </Box>
                    <Box flex="1" textAlign="left" fontWeight="bold" fontSize="md">
                      {player.name}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={2} px={2}>
                    <Wrap mb={3} spacing="6px">
                      {player.achievements?.map(ach => (
                        <WrapItem key={ach.title}>
                          <Tooltip label={ach.description} hasArrow bg="yellow.400" color="black" fontSize="xs">
                            <Badge
                              colorScheme="yellow"
                              fontWeight="medium"
                              px={2}
                              py={0.5}
                              borderRadius="sm"
                              cursor="pointer"
                              fontSize="10px"
                              lineHeight="16px"
                              borderWidth="1px"
                              borderColor="#e3c64d"
                              bg="rgba(255, 255, 200, 0.74)"
                              minW="auto"
                            >
                              {ach.title}
                            </Badge>
                          </Tooltip>
                        </WrapItem>
                      ))}
                    </Wrap>
                    <Flex wrap="wrap" gap={4}>
                      {Object.entries(player.stats).map(([label, value]) => (
                        <Box key={label} minW="110px" bg="rgba(255,255,255,0.02)" borderRadius="md" p={2} mb={1}>
                          <Text fontWeight="semibold" color="yellow.200" fontSize="sm">
                            {label}
                          </Text>
                          <Text fontSize="md" fontWeight="bold" color="white">
                            {value}
                          </Text>
                        </Box>
                      ))}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
