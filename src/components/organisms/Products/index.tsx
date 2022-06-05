import { Divider, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Products = () => {
  return (
    <>
      <span>
        <Divider
          mt={12}
          w={180}
          borderWidth={5}
          borderColor={'#B3D4FC'}
          opacity="1"
        />
      </span>
      <Divider orientation="vertical" />
      <span>
        <Text
          fontWeight="bold"
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          height="80px"
          justifyContent="left"
          position={'absolute'}
          px={6}
        >
          products
        </Text>
      </span>
    </>
  );
};

export default Products;
