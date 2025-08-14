// ListItemWithParagraphs.tsxx

import { useState } from 'react';

import { ListItem, Text, Link, Stack } from '@chakra-ui/react';

interface ListItemWithParagraphsProps {
  number: string;
  text: string;
  paragraphs?: string[];
}

const ListItemWithParagraphs: React.FC<ListItemWithParagraphsProps> = ({ number, text, paragraphs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (paragraphs) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <ListItem>
      <Stack spacing={4}>
        {paragraphs ? (
          <Link fontSize="md" onClick={handleToggle} cursor="pointer" color="teal.500">
            {number} - {text}
          </Link>
        ) : (
          <Text fontSize="md">
            {number} - {text}
          </Text>
        )}
        {paragraphs && isOpen && (
          <Stack spacing={2} ml="24px">
            {paragraphs.map((para, idx) => (
              <Text key={idx} fontSize={14}>
                {para}
              </Text>
            ))}
          </Stack>
        )}
      </Stack>
    </ListItem>
  );
};

export default ListItemWithParagraphs;
