import Link from 'next/link';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { HStack, Text } from '@chakra-ui/react';

interface NavigationMenuProps {
  links: Array<{ type: 'link' | 'scroll'; isExternal?: boolean; href: string; label: string }>;
  textColor: string;
  hoverColor: string;
  customs?: Array<{ position: number; component: JSX.Element }>;
}

export default function NavigationMenu({ links, textColor, hoverColor, customs = [] }: NavigationMenuProps) {
  const renderCustomComponent = (position: number) => {
    const customComponent = customs.find(custom => custom.position === position);
    return customComponent ? customComponent.component : null;
  };

  return (
    <HStack spacing={6} textTransform="uppercase" fontWeight={500} fontSize={14}>
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {renderCustomComponent(index)}
          {link.type === 'link' ? (
            <Link href={link.href} passHref>
              <Text
                cursor="pointer"
                color={textColor}
                _hover={{
                  color: hoverColor,
                }}
              >
                {link.label}
              </Text>
            </Link>
          ) : (
            <ScrollLink to={link.href} smooth={true} offset={-120} duration={500}>
              <Text
                cursor="pointer"
                color={textColor}
                _hover={{
                  color: hoverColor,
                }}
              >
                {link.label}
              </Text>
            </ScrollLink>
          )}
        </React.Fragment>
      ))}

      {customs
        .filter(custom => custom.position >= links.length)
        .map((custom, index) => (
          <React.Fragment key={`custom-end-${index}`}>{custom.component}</React.Fragment>
        ))}
    </HStack>
  );
}
