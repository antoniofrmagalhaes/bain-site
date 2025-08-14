import React, { useEffect, useState } from 'react';

import { Button, Flex, HStack } from '@chakra-ui/react';

import { useSwiper } from 'swiper/react';

export const SwiperNavigationButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);

    handleSlideChange();

    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  return (
    <Flex width="100%" justifyContent="flex-end">
      <HStack my={4}>
        <Button
          variant="link"
          fontWeight={300}
          _hover={
            !isBeginning
              ? {
                  color: 'white',
                }
              : {}
          }
          onClick={() => swiper.slidePrev()}
          disabled={isBeginning}
          _disabled={{
            color: 'gray.500',
            opacity: 0.6,
          }}
        >
          Anterior
        </Button>
        <Button
          variant="link"
          fontWeight={300}
          _hover={
            !isEnd
              ? {
                  color: 'white',
                }
              : {}
          }
          onClick={() => swiper.slideNext()}
          disabled={isEnd}
          _disabled={{
            color: 'gray.500',
            opacity: 0.6,
          }}
        >
          Próximo
        </Button>
      </HStack>
    </Flex>
  );
};
