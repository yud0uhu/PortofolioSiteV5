// import Image from 'next/image';
import Button from '@/components/atoms/Button/index';
import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Img,
  Spacer,
  Badge,
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
    <Center py={2}>
      <Box
        maxW="sm"
        borderWidth="1px"
        h="400px"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} p={2} pos={'relative'}>
          <Img
            overflow={'hidden'}
            src={productImage.url}
            maxH={'150px'}
            alt={productImage}
          />
        </Box>
        <Stack>
          <Box display="flex" alignItems="baseline">
            <Badge noOfLines={1} borderRadius="full" px="2" colorScheme="teal">
              {productComposition}
            </Badge>
          </Box>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'md'}
            fontFamily={'body'}
          >
            {productTitle}
          </Heading>
        </Stack>
        <Text color={'gray.500'}>{productData}</Text>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <a href={githubUrl}>
            <Text fontSize={'sm'}>GitHub</Text>
          </a>
          <Text lineHeight="tight">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {productDatail}
            </Box>
          </Text>
          {/* TODO: Moreでモーダル出す */}
          <Button text={'View More ＞'} />
        </Stack>
      </Box>
    </Center>
  );
}
