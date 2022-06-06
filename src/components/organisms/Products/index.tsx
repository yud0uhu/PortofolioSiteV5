import { Divider, Spacer, Flex, Text, Stack } from '@chakra-ui/react';
import Card from '../../atoms/Card/index';
import React from 'react';

import Button from '../../atoms/Button/index';
import { useMicrocmsWokrsMetadata } from '@/hooks/query/allMicrocmsWorks';

type allmicrocmsWorksProps = {
  githubUrl: string;
  productDatail: string;
  productImage: string;
  productTitle: string;
  productUrl: string;
  productComposition: string;
  productData: Date;
  sortIndex: number;
};
const Products = () => {
  const data = useMicrocmsWokrsMetadata();
  console.log(data);
  return (
    <>
      <Stack direction={'row'}>
        <Divider
          marginTop={12}
          w={{ base: 45, sm: 90, md: 180 }}
          borderWidth={5}
          borderColor={'#B3D4FC'}
          opacity="1"
        />
        <Text
          fontWeight="bold"
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          justifyContent="left"
          position={'absolute'}
          px={48}
        >
          products
        </Text>
      </Stack>
      <Stack marginTop={12}>
        <Flex>
          {data.nodes.map((node: allmicrocmsWorksProps, index: number) => (
            <Stack p={4} key={index}>
              <Card
                githubUrl={node.githubUrl}
                productDatail={node.productDatail}
                productImage={node.productImage}
                productTitle={node.productTitle}
                productUrl={node.productUrl}
                productComposition={node.productComposition}
                productData={node.productData}
                key={index}
              />
            </Stack>
          ))}
        </Flex>
        <Spacer />
        <Flex justifyContent="center">
          <Button />
        </Flex>
      </Stack>
    </>
  );
};

export default Products;
