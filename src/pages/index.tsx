import HomePage from '@/components/pages/HomePage/index';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import theme from '@/components/themes/default';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Img } from '@chakra-ui/react';
import LogoIcon from '@/static/ProfileBanner.png';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
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
        <Container maxWidth={'6xl'}>
          <HomePage />
        </Container>
      </RecoilRoot>
    </ChakraProvider>
  );
}
