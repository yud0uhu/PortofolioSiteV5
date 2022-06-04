import Header from '@/components/organisms/Header';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import theme from './../../theme';
import React from 'react';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW={'5xl'}>
        <Header />
      </Container>
    </ChakraProvider>
  );
}
