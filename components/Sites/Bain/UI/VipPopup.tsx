'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Image, IconButton, Link, Spinner } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MotionBox = motion(Box);

export default function VipPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {showSpinner && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(0, 0, 0, 0.7)"
          zIndex={9999}
        >
          <Spinner size="md" color="brand.500" thickness="2px" speed="0.35s" />
        </Box>
      )}

      <AnimatePresence>
        {isVisible && (
          <MotionBox
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            backgroundColor="rgba(0, 0, 0, 0.7)"
            zIndex={9999}
            display="flex"
            justifyContent="center"
            alignItems="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOverlayClick}
          >
            <MotionBox
              position="relative"
              ref={popupRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <IconButton
                aria-label="Fechar"
                icon={<X size={18} />}
                size="sm"
                position="absolute"
                top="3%"
                right={{ base: '4%', md: '8px' }}
                onClick={() => setIsVisible(false)}
                color="brand.500"
                opacity={0.8}
                background="none"
                _hover={{ bg: 'none', opacity: 1 }}
                zIndex={2}
              />

              <Image
                src="/vip-popup-image.png"
                alt="Anúncio VIP"
                onLoad={() => setShowSpinner(false)}
                onError={() => setShowSpinner(false)}
                mx={{ base: 4, md: 0 }}
                width="auto"
                maxWidth={{ base: 'calc(100% - 2rem)', md: '600px' }}
                maxHeight={{ base: '300px', md: '400px' }}
                borderRadius="md"
              />

              <Link
                position="absolute"
                top="84%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontWeight="500"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                color="white"
                href="https://discord.gg/bainclan"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://discord.gg/bainclan
              </Link>
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}
