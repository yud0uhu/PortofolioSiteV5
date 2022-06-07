import {
  SimpleGrid,
  Divider,
  Spacer,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import Card from '@/components/atoms/Card/index';
import React from 'react';

import Button from '@/components/atoms/Button/index';
import { useMicrocmsWokrsMetadata } from '@/hooks/query/allMicrocmsWorks';

type allmicrocmsWorksProps = {
  githubUrl: string;
  productDatail: string;
  productImage: string;
  productTitle: string;
  productUrl: string;
  productComposition: string;
  productData: Date;
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
        <SimpleGrid columns={3}>
          {data.nodes.map((node: allmicrocmsWorksProps, index: number) => (
            <Stack p={2} key={index} _hover={{ bg: 'gray.100' }}>
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
        </SimpleGrid>
        <Spacer />
        <Flex justifyContent="center">
          <Button text={'View More ＞'} />
        </Flex>
      </Stack>
    </>
  );
};

export default Products;
