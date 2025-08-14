import { useState } from 'react';

import { ListItem, Text, Link, Stack, Wrap } from '@chakra-ui/react';

interface ListItemWithInnerListProps {
  number: string;
  text: string;
  innerList?: string[];
  orientation?: 'vertical' | 'horizontal';
}

const ListItemWithInnerList: React.FC<ListItemWithInnerListProps> = ({
  number,
  text,
  innerList,
  orientation = 'vertical',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (innerList) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <ListItem>
      <Stack spacing={4}>
        {innerList ? (
          <Link fontSize="md" onClick={handleToggle} cursor="pointer" color="teal.500">
            {number} - {text}
          </Link>
        ) : (
          <Text fontSize="md">
            {number} - {text}
          </Text>
        )}
        {innerList &&
          isOpen &&
          (orientation === 'vertical' ? (
            <Stack spacing={0} ml="24px">
              {innerList.map((item, idx) => (
                <Text key={idx} fontSize={14}>
                  {item}
                </Text>
              ))}
            </Stack>
          ) : (
            <Wrap spacing="4" ml="24px">
              {innerList.map((item, idx) => (
                <Text key={idx} fontSize={14}>
                  {item}
                </Text>
              ))}
            </Wrap>
          ))}
      </Stack>
    </ListItem>
  );
};

export default ListItemWithInnerList;
