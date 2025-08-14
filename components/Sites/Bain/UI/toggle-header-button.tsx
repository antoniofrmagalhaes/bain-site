import { Button } from '@chakra-ui/react';

type ToggleButtonHeaderProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export function ToggleButtonHeader({ label, active, onClick }: ToggleButtonHeaderProps) {
  return (
    <Button
      variant="ghost"
      color={active ? 'white' : 'gray.400'}
      fontWeight={active ? 'bold' : 'semibold'}
      _hover={{ color: 'white' }}
      size="sm"
      onClick={onClick}
      px={0}
    >
      {label}
    </Button>
  );
}
