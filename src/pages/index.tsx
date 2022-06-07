import HomePage from '@/components/pages/HomePage/index';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import theme from '@/components/themes/default';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Img } from '@chakra-ui/react';
import LogoIcon from '@/static/Logo.png';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <Stack
          direction={'column'}
          spacing={3}
          pt={36}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}
        >
          <Img
            width={'1680px'}
            height={'240px'}
            objectFit="cover"
            src={LogoIcon}
            alt="logo"
          />
        </Stack>
        <Container maxW={'5xl'}>
          <HomePage />
        </Container>
      </RecoilRoot>
    </ChakraProvider>
  );
}
