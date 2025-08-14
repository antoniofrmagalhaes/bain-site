import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';

import { useApplication } from '@/contexts/ApplicationContext';
import { Heading, Text, UnorderedList, HStack, Icon } from '@chakra-ui/react';

import ListItemWithInnerList from './ListItemWithInnerList';
import ListItemWithTip from './ListItemWithTip';

interface ServerRulesPageProps {
  handleFirstPage: () => void;
}

const ServerRulesPage: React.FC<ServerRulesPageProps> = ({ handleFirstPage }) => {
  const { pageContent } = useApplication();
  const serverRules = pageContent.pages.enlist.serverRules;

  return (
    <>
      <HStack spacing={4} mb={4}>
        <Icon cursor="pointer" as={RiArrowLeftLine} fontSize={32} onClick={handleFirstPage} />
        <Heading size="xl">{serverRules.title}</Heading>
      </HStack>
      <Text mb={6}>{serverRules.description}</Text>
      <UnorderedList styleType="none" spacing={6}>
        {serverRules.rules.map((rule: any) => {
          if (rule.type === 'withinnerlist') {
            return (
              <ListItemWithInnerList
                key={rule.number}
                number={rule.number}
                text={rule.text}
                innerList={rule.innerList}
                orientation={rule.orientation as 'vertical'}
              />
            );
          } else {
            return <ListItemWithTip key={rule.number} number={rule.number} text={rule.text} tip={rule.tip} />;
          }
        })}
      </UnorderedList>
    </>
  );
};

export default ServerRulesPage;
