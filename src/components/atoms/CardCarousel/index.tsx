// import Image from 'next/image';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type allmicrocmsWorksProps = {
  githubUrl: string;
  productDatail: string;
  productImage: string;
  productTitle: string;
  productUrl: string;
  productComposition: string;
  productData: Date;
};
export default function CardCarousel(props: allmicrocmsWorksProps) {
  const {
    githubUrl,
    productDatail,
    productImage,
    productTitle,
    productUrl,
    productComposition,
    productData,
  } = props;
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
}
