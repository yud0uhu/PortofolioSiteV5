import { Stack, Flex, Box } from '@chakra-ui/react';
import Header from '../../organisms/Header/index';
import About from '../../organisms/About/index';
import Products from '../../organisms/Products/index';
import React from 'react';

export default function HomePage() {
  return (
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Stack
        direction={'column'}
        spacing={3}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        <Header />
      </Stack>
      <Flex w={'full'} direction={'column'}>
        <About />
      </Flex>
      {/* <Flex>
        <Products />
      </Flex> */}
    </Stack>
  );
}
