import {
  SimpleGrid,
  Divider,
  Spacer,
  Flex,
  Text,
  Stack,
} from '@chakra-ui/react';
import UiCard from '@/components/atoms/UiCard/index';
import React from 'react';

import Button from '@/components/atoms/Button/index';
import { useAllMicrocmsDailiuiMetadata } from '@/hooks/query/allMicrocmsDailiui';

type allmicrocmsDailyuiProps = {
  figma: string;
  title: string;
  image: string;
};
const Products = () => {
  const data = useAllMicrocmsDailiuiMetadata();
  console.log(data);
  return (
    <>
      {/* <Stack direction={'row'}>
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
          Daily UI
        </Text>
      </Stack>
      <Stack marginTop={12}>
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          {data.nodes.map((node: allmicrocmsDailyuiProps, index: number) => (
            <Stack p={2} key={index} _hover={{ bg: 'gray.100' }}>
              <UiCard
                figma={node.figma}
                title={node.title}
                image={node.image}
                key={index}
              />
            </Stack>
          ))}
        </SimpleGrid>
        <Spacer />
        <Flex justifyContent="center">
          <Button text={'View More ＞'} />
        </Flex>
      </Stack> */}
    </>
  );
};

export default Products;
