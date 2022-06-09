import HomePage from '@/components/pages/HomePage/index';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Img } from '@chakra-ui/react';
import LogoIcon from '@/static/ProfileBanner_second.png';
import '@fontsource/reggae-one/400.css';
import theme from '@/components/themes/default';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Stack
        spacing={3}
        pt={36}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        <Img
          width={{ base: 'sm', md: '1500px', sm: 'sm' }}
          height={{ base: 'full', md: 'full', sm: 'full' }}
          objectFit="cover"
          src={LogoIcon}
          alt="logo"
        />
      </Stack>
      <Container maxWidth={{ base: 'full', md: '6xl', sm: 'full' }}>
        <HomePage />
      </Container>
    </ChakraProvider>
  );
}
