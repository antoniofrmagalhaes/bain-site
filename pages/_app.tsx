import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import ApplicationProvider from '@/contexts/ApplicationContext';
import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/nprogress.css';
import '@/styles/swiper-custom.css';

import 'flag-icons/css/flag-icons.min.css';
import NProgress from 'nprogress';
import 'swiper/css';
import 'swiper/css/navigation';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <ApplicationProvider>
        <Component {...pageProps} />
      </ApplicationProvider>
    </ChakraProvider>
  );
}

export default MyApp;
