import HomePage from '@/components/pages/HomePage/index';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import theme from '@/components/themes/default';
import React from 'react';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Container maxW={'5xl'}>
          <HomePage />
        </Container>
      </RecoilRoot>
    </ChakraProvider>
  );
}
