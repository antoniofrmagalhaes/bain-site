import { useApplication } from '@/contexts/ApplicationContext';
import { HStack, Stack, Box } from '@chakra-ui/react';

interface SelectLanguageProps {
  mobile?: boolean;
}

export default function SelectLanguage({ mobile }: SelectLanguageProps) {
  const { changeLanguage, language } = useApplication();

  if (mobile) {
    return (
      <HStack spacing={2}>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('pt-br')}
          opacity={language === 'pt-br' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-br" style={{ fontSize: '16px' }}></span>
        </Box>

        <Box
          cursor="pointer"
          onClick={() => changeLanguage('en-us')}
          opacity={language === 'en-us' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-us" style={{ fontSize: '16px' }}></span>
        </Box>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('es-la')}
          opacity={language === 'es-la' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-es" style={{ fontSize: '16px' }}></span>
        </Box>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('de-de')}
          opacity={language === 'de-de' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-de" style={{ fontSize: '16px' }}></span>
        </Box>
      </HStack>
    );
  }

  return (
    <HStack spacing={2}>
      <Stack spacing={0}>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('pt-br')}
          opacity={language === 'pt-br' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-br" style={{ fontSize: '16px' }}></span>
        </Box>

        <Box
          cursor="pointer"
          onClick={() => changeLanguage('en-us')}
          opacity={language === 'en-us' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-us" style={{ fontSize: '16px' }}></span>
        </Box>
      </Stack>
      <Stack spacing={0}>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('es-la')}
          opacity={language === 'es-la' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-es" style={{ fontSize: '16px' }}></span>
        </Box>
        <Box
          cursor="pointer"
          onClick={() => changeLanguage('de-de')}
          opacity={language === 'de-de' ? 1 : 0.5}
          _hover={{ opacity: 1 }}
          transition="opacity 0.2s ease"
          willChange="opacity"
        >
          <span className="fi fi-de" style={{ fontSize: '16px' }}></span>
        </Box>
      </Stack>
    </HStack>
  );
}
