import {
  Divider,
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  UnorderedList,
  HStack,
} from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';
import { useAllMicrocmsSlideMetadata } from '@/hooks/query/allMicrocmsSlide';

type allmicrocmsSlideProps = {
  slideTitle: string;
  slideUrl: string;
};
const Slides = () => {
  const data = useAllMicrocmsSlideMetadata();
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
          slides
        </Text>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
      </HStack>
      <Stack direction={'row'} marginTop={12} marginBottom={12}>
        <UnorderedList textAlign={'left'}>
          {data.nodes.map((node: allmicrocmsSlideProps, index: number) => (
            <Stack p={2} key={index} _hover={{ bg: 'gray.100' }}>
              <ListItem>
                <a href={node.slideUrl}>{node.slideTitle}</a>
              </ListItem>
            </Stack>
          ))}
        </UnorderedList>
      </Stack>
    </>
  );
};

export default Slides;
