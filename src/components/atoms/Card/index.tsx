// import Image from 'next/image';
import Button from '@/components/atoms/Button/index';
import ProductsDetail from '@/components/atoms/Modal/index';
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
  LinkBox,
  LinkOverlay,
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
      <LinkBox
        h="300px"
        width="300px"
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
      >
        <Box>
          <Img
            overflow={'hidden'}
            src={productImage.url}
            maxH={'150px'}
            width={'300px'}
            alt={productImage}
          />
        </Box>
        <Box as="time" dateTime="${productData}">
          {productData}
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href={githubUrl}>GitHub</LinkOverlay>
        </Heading>
        <Text as="h4" lineHeight="tight" noOfLines={1}>
          {productDatail}
        </Text>
      </LinkBox>
    </Center>
  );
}
