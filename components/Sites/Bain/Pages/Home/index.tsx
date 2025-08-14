import Head from 'next/head';

import PageLayout from '@/components/Sites/Bain/Layouts/PageLayout';
import Hero from '@/components/Sites/Bain/Pages/Home/Hero';
import { Flex } from '@chakra-ui/react';
import VipPopup from '../../UI/VipPopup';

export default function Home() {
  return (
    <>
      <Head>
        <title>BRASIL HELL | »BAIN« </title>
        <meta name="description" content="O Melhor clan de hll do Brasil" />
        <meta
          name="keywords"
          content="hell let loose, bainclan, melhor server br de hell let loose, bastardos inglorios, marram, »BAIN«"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <PageLayout>
        <Flex position="relative" width="100vw" minHeight="100vh" color="white" overflow="hidden" bg="gray.900">
          <VipPopup />
          <Hero />
        </Flex>
      </PageLayout>
    </>
  );
}
