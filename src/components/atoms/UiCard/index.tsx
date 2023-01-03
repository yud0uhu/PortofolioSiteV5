// import Image from 'next/image';
import { allmicrocmsDailyuiProps } from '@/components/type';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

const uiCard: FC<allmicrocmsDailyuiProps> = (
  props: allmicrocmsDailyuiProps,
) => {
  return (
    <>
      <Heading
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontFamily={'Reggae One'}
      >
        {props.title}
      </Heading>
      <Box
        height={'full'}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundImage={props.image.url}
      >
        <Container size="container.lg" height="600px" position="relative">
          <Stack
            spacing={6}
            w={'full'}
            maxW={'lg'}
            position="absolute"
            top="50%"
            transform="translate(0, -50%)"
          ></Stack>
        </Container>
      </Box>
    </>
  );
};
export default uiCard;
