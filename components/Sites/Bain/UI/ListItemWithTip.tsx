import { useState } from 'react';

import { ListItem, Text, Link, Stack } from '@chakra-ui/react';

const ListItemWithTip = ({ number, text, tip }: { number: string; text: string; tip?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (tip) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <ListItem>
      <Stack spacing={4}>
        {tip ? (
          <Link fontSize="md" onClick={handleToggle} cursor="pointer" color="teal.500">
            {number} - {text}
          </Link>
        ) : (
          <Text fontSize="md">
            {number} - {text}
          </Text>
        )}
        {tip && isOpen && (
          <Text ml="24px" fontSize={14}>
            {tip}
          </Text>
        )}
      </Stack>
    </ListItem>
  );
};

export default ListItemWithTip;
