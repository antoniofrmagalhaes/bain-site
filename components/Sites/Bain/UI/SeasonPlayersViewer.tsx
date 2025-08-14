'use client';

import { useRankedApi } from '@/hooks/use-ranked-api';
import { Box, Flex, Text, Button, Avatar, HStack, Progress, StackDivider } from '@chakra-ui/react';

import PlayersSearchTextInput from './player-search-text-input';
import { ToggleButtonHeader } from './toggle-header-button'; // ajuste o path se necessário

const ORDERABLE_FIELDS = [
  { label: 'Combate', value: 'combat', width: '144px' },
  { label: 'Ataque', value: 'offense', width: '144px' },
  { label: 'Defesa', value: 'defense', width: '144px' },
  { label: 'Suporte', value: 'support', width: '144px' },
  { label: 'Abates', value: 'kills', width: '144px' },
  { label: 'K/D', value: 'kd', width: '100px' },
  { label: 'Partidas', value: 'matches', width: '144px' },
];

const filterBg = 'rgba(255,255,255,0.08)';
const tableBg = 'rgba(255,255,255,0.03)';
const borderColor = 'rgba(255,255,255,0.12)';
const leftColors = ['#FFD700', '#C0C0C0', '#CD7F32'];

const rankColor: Record<string, string> = {
  PRIVATE: 'gray',
  CORPORAL: 'green',
  SERGEANT: 'teal',
  LIEUTENANT: 'blue',
  CAPTAIN: 'purple',
};

export default function SeasonPlayersViewer() {
  const { players, top, loading, name, setName, page, totalPages, loadMore, orderBy, setOrderBy, apiError } =
    useRankedApi();

  const getAvatar = (player: any) => player.avatar || undefined;

  return (
    <Box minH="100%">
      <Box width="100%">
        <HStack
          divider={<StackDivider />}
          bg={filterBg}
          borderRadius="2xl"
          p={4}
          align="center"
          gap={4}
          mb={4}
          flexWrap="wrap"
        >
          <HStack spacing={3}>
            <Text color="white" fontWeight="medium" fontSize="sm">
              BRASIL HELL | Hell let loose | BAIN
            </Text>
          </HStack>
          <HStack spacing={3}>
            <Button size="sm" bg="#39405a" color="white" _hover={{ bg: '#4c5673' }}>
              Temporada 1
            </Button>
          </HStack>
          <HStack spacing={3}>
            <Text color="white" fontWeight="medium" fontSize="sm">
              Modo de jogo
            </Text>
            <Button size="sm" bg="#39405a" color="white" _hover={{ bg: '#4c5673' }}>
              Guerra
            </Button>
          </HStack>
          <HStack spacing={3}>
            <Text color="gray.300">Competitivo</Text>
          </HStack>
          <PlayersSearchTextInput value={name} onChange={setName} />
        </HStack>
        <Box
          width="100%"
          bg={tableBg}
          borderRadius="2xl"
          border="1px solid"
          borderColor={borderColor}
          overflow="hidden"
          shadow="md"
        >
          <Flex
            width="100%"
            pl={2}
            pr={3}
            py={4}
            gap={4}
            color="gray.300"
            fontWeight="semibold"
            fontSize="sm"
            bg="rgba(0, 0, 0, 0.7)"
            position="relative"
            align="center"
          >
            <Box w="8px" h="32px" />
            <Box w="60px" />
            <Box flex={1} minW="220px">
              Players
            </Box>
            {ORDERABLE_FIELDS.map(field => (
              <Box w={field.width} textAlign="center" key={field.value}>
                <ToggleButtonHeader
                  label={field.label}
                  active={orderBy === field.value}
                  onClick={() => setOrderBy(field.value)}
                />
              </Box>
            ))}
            <Box w="124px" textAlign="center">
              Ranking
            </Box>
          </Flex>
          {apiError ? (
            <Box color="yellow.300" p={8} textAlign="center" fontSize="lg">
              {apiError}
            </Box>
          ) : loading && players.length === 0 ? (
            <Box color="whiteAlpha.700" p={8} textAlign="center">
              Loading...
            </Box>
          ) : (
            players.map((p, i) => {
              const isTop3 = i < 3;
              const sideColor = isTop3 ? leftColors[i] : tableBg;
              const armyRank = 'PRIVATE';
              const combatPercent = top ? (p.combat / top.combat) * 100 : 0;
              const offensePercent = top ? (p.offense / top.offense) * 100 : 0;
              const defensePercent = top ? (p.defense / top.defense) * 100 : 0;
              const supportPercent = top ? (p.support / top.support) * 100 : 0;
              const killsPercent = top ? (p.kills / top.kills) * 100 : 0;

              return (
                <Flex
                  width="100%"
                  key={p.id}
                  px={0}
                  py={3}
                  pr={3}
                  gap={4}
                  align="center"
                  borderTop="1px solid"
                  borderColor={borderColor}
                  bg={undefined}
                  _hover={{ bg: 'rgba(255,204,0,0.03)' }}
                  position="relative"
                >
                  <Box
                    w="8px"
                    h="56px"
                    bg={sideColor}
                    borderRadius="4px"
                    position="absolute"
                    left={0}
                    top="50%"
                    transform="translateY(-50%)"
                  />
                  <Box w="1px" />
                  <Box w="75px" textAlign="center" color={'gray.400'} fontWeight="bold">
                    {p.ranking}
                  </Box>
                  <Box flex={1} minW="220px" display="flex" alignItems="center">
                    <Avatar size="sm" src={getAvatar(p)} name={p.name} mr={3} />
                    <Box textAlign="left">
                      <Text color="white" fontWeight="semibold" fontSize="md">
                        {p.name}
                      </Text>
                      {/* <Text fontSize="xs" color="gray.400">
                        {p.playerId}
                      </Text> */}
                    </Box>
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="white" fontWeight="bold">
                      {p.combat}
                    </Text>
                    <Progress
                      colorScheme="whiteAlpha"
                      size="xs"
                      value={combatPercent}
                      bg="rgba(255,255,255,0.07)"
                      borderRadius="md"
                    />
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="red.400" fontWeight="bold">
                      {p.offense}
                    </Text>
                    <Progress
                      colorScheme="red"
                      size="xs"
                      value={offensePercent}
                      bg="rgba(255,255,255,0.07)"
                      borderRadius="md"
                    />
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="blue.400" fontWeight="bold">
                      {p.defense}
                    </Text>
                    <Progress
                      colorScheme="blue"
                      size="xs"
                      value={defensePercent}
                      bg="rgba(255,255,255,0.07)"
                      borderRadius="md"
                    />
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="yellow.300" fontWeight="bold">
                      {p.support}
                    </Text>
                    <Progress
                      colorScheme="yellow"
                      size="xs"
                      value={supportPercent}
                      bg="rgba(255,255,255,0.07)"
                      borderRadius="md"
                    />
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="white" fontWeight="bold">
                      {p.kills}
                    </Text>
                    <Progress
                      colorScheme="whiteAlpha"
                      size="xs"
                      value={killsPercent}
                      bg="rgba(255,255,255,0.07)"
                      borderRadius="md"
                    />
                  </Box>
                  <Box w="100px" textAlign="center">
                    <Text color="white" fontWeight="bold">
                      {typeof p.kd === 'number' ? p.kd.toFixed(2) : '-'}
                    </Text>
                  </Box>
                  <Box w="144px" textAlign="center">
                    <Text color="white" fontWeight="bold">
                      {p.matches}
                    </Text>
                  </Box>
                  <Box w="124px" textAlign="center">
                    <Text color={rankColor[armyRank] || 'gray'} fontSize="md" px={3} py={1} borderRadius="lg">
                      {armyRank}
                    </Text>
                  </Box>
                </Flex>
              );
            })
          )}
        </Box>
        <Flex justifyContent="flex-end" p={5}>
          <Button
            colorScheme="yellow"
            variant="link"
            fontWeight="400"
            borderColor="#ffcc00"
            color="#ffcc00"
            onClick={loadMore}
            opacity={page < totalPages ? 1 : 0.7}
            isDisabled={page >= totalPages || loading}
          >
            CARREGAR MAIS
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
