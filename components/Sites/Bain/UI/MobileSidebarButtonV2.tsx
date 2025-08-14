import { FC } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

import { Center, IconButton } from '@chakra-ui/react';

interface MobileSidebarButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MobileSidebarButton: FC<MobileSidebarButtonProps> = ({ onClick, isOpen }) => {
  return (
    <Center height={{ base: '24px', sm: '26px', md: '28px' }} width={{ base: '32px', sm: '34px', md: '36px' }}>
      <IconButton
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        icon={isOpen ? <RiCloseLine size={38} /> : <RiMenuLine size={38} />}
        onClick={onClick}
        variant="ghost"
        size="lg"
        color="#FFB430"
        _hover={{ bg: 'transparent' }}
      />
    </Center>
  );
};

export default MobileSidebarButton;
