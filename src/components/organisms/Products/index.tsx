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
          w={{ base: 90, sm: 90, md: 180 }}
          borderWidth={5}
          borderColor={'#B3D4FC'}
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
        {/* <SimpleGrid columns={{ sm: 1, md: 2 }}>
          {data.nodes.map((node: allmicrocmsWorksProps, i: number) => (
            <Stack p={2} key={i} _hover={{ bg: 'gray.100' }}>
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
            </Stack>
          ))}
        </SimpleGrid> */}
        <Spacer />
        <Flex justifyContent="center">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton justifyContent="center">
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack marginTop={12}>
                  <SimpleGrid columns={{ sm: 1, md: 2 }}>
                    {data.nodes.map(
                      (node: allmicrocmsWorksProps, i: number) => (
                        <Stack p={2} key={i} _hover={{ bg: 'gray.100' }}>
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
                        </Stack>
                      ),
                    )}
                  </SimpleGrid>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Stack>
    </>
  );
};

export default Products;
