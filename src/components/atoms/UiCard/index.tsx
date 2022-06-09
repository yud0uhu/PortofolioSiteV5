// import Image from 'next/image';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type allmicrocmsDailyuiProps = {
  figma: string;
  title: string;
  image: string;
};
export default function uiCard(props: allmicrocmsDailyuiProps) {
  const { figma, title, image } = props;
  return (
    <Box
      height={'full'}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="contain"
      backgroundImage={image.url}
    >
      <Container size="container.lg" height="600px" position="relative">
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontFamily={'Reggae One'}
          ></Heading>
        </Stack>
      </Container>
    </Box>
  );
}
