import { Stack, Flex, Box } from '@chakra-ui/react';
import Header from '@/components/organisms/Header/index';
import About from '@/components/organisms/About/index';
import Products from '@/components/organisms/Products/index';
import Slides from '@/components/organisms/Slides/index';
import DailyUi from '@/components/organisms/Dailyui/index';
import Job from '@/components/organisms/Job/index';
import React from 'react';
import ReturntoButton from '@/components/atoms/ReturnTopButton/index';
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
      <Flex w={'full'} direction={'column'}>
        <Products />
      </Flex>
      <Flex w={'full'} direction={'column'}>
        <DailyUi />
      </Flex>
      <Flex w={'full'} direction={'column'}>
        <Slides />
      </Flex>
      <Flex w={'full'} direction={'column'}>
        <Job />
      </Flex>
      <ReturntoButton />
    </Stack>
  );
}
