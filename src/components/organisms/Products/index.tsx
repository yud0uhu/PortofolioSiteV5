import {
  SimpleGrid,
  Divider,
  Spacer,
  Flex,
  Text,
  Stack,
  AccordionButton,
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionIcon,
  Accordion,
  HStack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import Card from '@/components/atoms/Card/index';
import React from 'react';

import Button from '@/components/atoms/Button/index';
import { uselimitMicrocmsWokrsMetadata } from '@/hooks/query/limitMicrocmsWorks';

type microcmsWorksProps = {
  githubUrl: string;
  productDatail: string;
  productImage: string;
  productTitle: string;
  productUrl: string;
  productComposition: string;
  productData: Date;
};
const Products = () => {
  const data = uselimitMicrocmsWokrsMetadata();
  console.log(data);
  return (
    <>
      <HStack direction={'row'}>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
        <Text
          fontWeight="bold"
          fontSize={{ base: '40px', sm: '0px', md: '40px' }}
          px={{ base: '12', sm: '12', md: '64' }}
          fontFamily={'Reggae One'}
        >
          products
        </Text>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
      </HStack>
      <SimpleGrid columns={[1, null, 4]} spacing="40px">
        {data.nodes.map((node: microcmsWorksProps, i: number) => (
          <Card
            githubUrl={node.githubUrl}
            productDatail={node.productDatail}
            productImage={node.productImage}
            productTitle={node.productTitle}
            productUrl={node.productUrl}
            productComposition={node.productComposition}
            productData={node.productData}
            key={i}
          />
        ))}
      </SimpleGrid>
      <Spacer />
      <Button text={'View More ＞'} />
    </>
  );
};

export default Products;
