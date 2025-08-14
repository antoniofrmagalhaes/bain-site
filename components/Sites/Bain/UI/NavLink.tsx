import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { Text, TextProps } from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MotionText = motion(Text);

interface NavLinkProps {
  children: string | ReactNode;
  href: string;
  shouldMatchExactHref?: boolean;
  customStyle?: TextProps;
  isDisabled?: boolean;
  motionProps?: object;
}

export function NavLink({
  children,
  href,
  shouldMatchExactHref = false,
  customStyle = {},
  isDisabled = false,
  motionProps = {},
}: NavLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if (shouldMatchExactHref) {
    if (asPath === href) isActive = true;
  } else {
    if (asPath.startsWith(href)) isActive = true;
  }

  const baseStyle: TextProps = {
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: isDisabled ? 'none' : 'auto',
    ...customStyle,
    color: isActive ? 'blue.500' : customStyle.color || 'initial',
  };

  if (isDisabled) {
    return <Text {...baseStyle}>{children}</Text>;
  }

  return (
    <Link href={href} passHref>
      <MotionText {...baseStyle} {...motionProps}>
        {children}
      </MotionText>
    </Link>
  );
}
