'use client';

import { FiSearch, FiX } from 'react-icons/fi';

import { Input, InputGroup, InputRightElement, IconButton, Spinner } from '@chakra-ui/react';

type Props = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  searching?: boolean;
};

export default function PlayersSearchTextInput({ value, onChange, searching }: Props) {
  const showClear = !!value && !searching;
  return (
    <InputGroup flex={1}>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Buscar jogador..."
        bg="#232838"
        color="white"
        fontSize="sm"
        border="none"
        pr="36px"
      />
      <InputRightElement width="36px">
        {searching ? (
          <Spinner size="sm" color="gray.200" />
        ) : showClear ? (
          <IconButton
            aria-label="Limpar"
            icon={<FiX />}
            size="xs"
            variant="ghost"
            color="gray.200"
            onClick={() => onChange('')}
            tabIndex={-1}
            _hover={{ color: 'white' }}
          />
        ) : (
          <FiSearch color="#bbb" size={18} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
