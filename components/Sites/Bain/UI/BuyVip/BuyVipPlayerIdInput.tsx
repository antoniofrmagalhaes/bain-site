import { useEffect, useState, ReactNode } from 'react';
import { UseFormClearErrors } from 'react-hook-form';

import { api } from '@/services/httpClient';
import { Box, Input, Flex, Text, FormControl, FormErrorMessage, Spinner, useColorModeValue } from '@chakra-ui/react';

import { Check, Search, X } from 'lucide-react';

type PlayerData = {
  player_id: string;
  name: string;
  created: string;
  last_seen: string;
  avatar_url?: string;
  vip?: boolean;
  vip_expiration?: string | null;
};

export function BuyVipPlayerIdInput({
  value,
  onChange,
  clearErrors,
  error,
  label = 'ID Steam ou GamePass',
  userNotFoundText,
}: {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (id: string) => void;
  clearErrors: UseFormClearErrors<{
    id: string;
    email: string;
  }>;
  error?: string;
  label?: string;
  userNotFoundText?: ReactNode;
}) {
  const [query, setQuery] = useState(value || '');
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState<PlayerData | null>(null);
  const [touched, setTouched] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  function isValidId(id: string) {
    const value = id.trim();
    return /^\d{17,}$/.test(value) || value.toLowerCase().startsWith('xuid-') || /^[a-fA-F0-9]{32}$/.test(value);
  }

  useEffect(() => {
    if (!query || !isValidId(query)) {
      setPlayer(null);
      setSearchError(null);
      return;
    }
    setLoading(true);
    setSearchError(null);
    api
      .get(`/check-vip-eligibility?id=${encodeURIComponent(query)}`)
      .then(res => {
        const data = res.data;
        if (data.valid) {
          setPlayer({
            player_id: data.player.player_id ?? query,
            name: data.player.name,
            created: data.player.created,
            last_seen: data.player.last_seen,
            avatar_url: data.player.avatar_url,
            vip: data.player.vip,
            vip_expiration: data.player.vip_expiration,
          });
          setSearchError(null);
          onChange(data.player.player_id ?? query);
          clearErrors('id');
        } else {
          setPlayer(null);
          setSearchError('ID não encontrado.');
          onChange('');
        }
      })
      .catch(() => {
        setPlayer(null);
        setSearchError('Erro na validação.');
        onChange('');
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const defaultBorderColor = useColorModeValue('gray.200', 'gray.600');
  const borderColor = !!error || searchError ? 'red.300' : player ? 'green.800' : defaultBorderColor;

  return (
    <FormControl isInvalid={!!error || !!searchError}>
      <Box mb={1} fontWeight="semibold" fontSize="sm">
        {label}
      </Box>
      <Box position="relative">
        <Input
          value={query}
          // autoComplete="off"
          onChange={e => {
            setQuery(e.target.value);
            setTouched(true);
            setPlayer(null);
            setSearchError(null);
            clearErrors('id');
            onChange('');
          }}
          placeholder="Cole aqui o ID Steam ou GamePass"
          borderColor={borderColor}
          pr="2.5rem"
        />
        <Box position="absolute" right="0.75rem" top="50%" transform="translateY(-50%)">
          {loading ? (
            <Spinner size="sm" />
          ) : player ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : touched && query.length > 0 && !isValidId(query) ? (
            <X className="h-4 w-4 text-red-600" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </Box>
      </Box>

      {player && (
        <Flex align="center" border="1px solid" borderColor="gray.700" borderRadius="md" mt={4} p={3} gap={4}>
          <Box>
            <Text>{player.name}</Text>
            <Text fontSize="sm" color="gray.400">
              Steam/GamePass ID: {player.player_id}
            </Text>
            <Text fontSize="sm" color="gray.400">
              VIP:{' '}
              <Text as="span" color={player.vip ? 'green.400' : 'red.400'}>
                {player.vip ? 'Ativo' : 'Inativo'}
              </Text>
            </Text>
            <Text fontSize="sm" color="gray.400">
              Expiração: {player.vip && player.vip_expiration ? new Date(player.vip_expiration).toLocaleString() : '--'}
            </Text>
          </Box>
        </Flex>
      )}

      <FormErrorMessage>
        {searchError === 'ID não encontrado.'
          ? userNotFoundText
          : error === 'Required' || error === 'ID obrigatório'
          ? 'ID obrigatório'
          : error || searchError}
      </FormErrorMessage>
      <input type="hidden" value={player ? player.player_id : ''} readOnly name="id" data-testid="player-id-hidden" />
    </FormControl>
  );
}
