// import Image from 'next/image';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

import { allmicrocmsWorksProps } from '@/components/type';

const CardCarousel: React.FC<allmicrocmsWorksProps> = ({
  productDatail,
  productImage,
  productTitle,
  productComposition,
}: allmicrocmsWorksProps) => {
  return (
    <>
      <Heading
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontFamily={'Reggae One'}
        color={'#40322A'}
      >
        <Text>{productTitle}</Text>
      </Heading>
      <Text>{productDatail}</Text>
      <Text>{productComposition}</Text>
      <Box
        height={'full'}
        position="relative"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="contain"
        backgroundImage={productImage.url}
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
export default CardCarousel;
