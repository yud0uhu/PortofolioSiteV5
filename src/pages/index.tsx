import { HomePage } from '@/components/pages/HomePage/index';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

import { Img } from '@chakra-ui/react';
// import LogoIcon from '@/static/ProfileBanner.webpp';
import '@fontsource/reggae-one/400.css';
import theme from '@/components/themes/default';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Stack
        spacing={3}
        pt={36}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}
      >
        <picture>
          {/* <Img
            width={{ base: 'sm', md: '1500px', sm: 'sm' }}
            height={{ base: '200px', md: '300px', sm: '200px' }}
            objectFit={{ base: 'scale-down', md: 'cover', sm: 'scale-down' }}
            src={LogoIcon}
            alt="logo"
          /> */}
        </picture>
      </Stack>
      <Container maxWidth={{ base: 'full', md: '6xl', sm: 'full' }}>
        <HomePage />
      </Container>
    </ChakraProvider>
  );
};
export default Home;
