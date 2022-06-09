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
        >
          <a href={productUrl} target="_blank" rel="noreferrer">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontFamily={'Reggae One'}
            >
              {productTitle}
            </Heading>
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Text>{productComposition}</Text>
          <Text>{productDatail}</Text>
        </Stack>
      </Container>
    </Box>
  );
}
