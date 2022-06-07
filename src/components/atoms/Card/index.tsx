// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Img,
} from '@chakra-ui/react';
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
export default function Card(props: allmicrocmsWorksProps) {
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
    <Center py={6}>
      <Box
        height={'lg'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Img src={productImage.url} alt={productImage} />
        </Box>
        <Stack>
          <Text
            color={'#B3D4FC'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {productComposition}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
          >
            {productTitle}
          </Heading>
        </Stack>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <a href={githubUrl}>
            <Text
              fontSize={{ base: '20px', md: '20px' }}
              fontWeight={600}
              textAlign={'left'}
            >
              {githubUrl}
            </Text>
          </a>
          <Text fontWeight={600} textAlign={'left'}>
            {productDatail}
          </Text>
          <Text color={'gray.500'} textAlign={'left'}>
            {productData}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
