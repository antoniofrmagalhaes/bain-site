import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';

import { useApplication } from '@/contexts/ApplicationContext';
import { Box, Heading, Text, UnorderedList, HStack, Icon } from '@chakra-ui/react';

import ListItemWithTip from './ListItemWithTip';

interface ConductRulesPageProps {
  handleFirstPage: () => void;
}

const ConductRulesPage: React.FC<ConductRulesPageProps> = ({ handleFirstPage }) => {
  const { pageContent } = useApplication(); // Obtém o conteúdo do contexto
  const conductRules = pageContent.pages.enlist.conductRules; // Conteúdo específico das Regras de Conduta

  return (
    <>
      <HStack spacing={3} mb={4}>
        <Icon cursor="pointer" as={RiArrowLeftLine} fontSize={32} onClick={handleFirstPage} />
        <Heading size="xl">{conductRules.title}</Heading>
      </HStack>
      <Text mb={6}>{conductRules.description}</Text>
      <UnorderedList styleType="none" ml={0}>
        {conductRules.rules.map((section: any) => (
          <Box key={section.number} mb={4}>
            <Text fontWeight="bold" fontSize="lg">
              {section.number}. {section.title}
            </Text>
            <UnorderedList styleType="none" ml={4} mt={2} spacing={4}>
              {section.subsections.map((sub: any) => (
                <ListItemWithTip key={sub.number} number={sub.number} text={sub.text} tip={sub.tip} />
              ))}
            </UnorderedList>
          </Box>
        ))}
      </UnorderedList>
    </>
  );
};

export default ConductRulesPage;
