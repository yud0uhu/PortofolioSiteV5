import {
  Divider,
  Text,
  Stack,
  ListItem,
  UnorderedList,
  HStack,
  VStack,
} from '@chakra-ui/react';
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
        <Divider borderWidth={2} borderColor={'#B3D4FC'} />
        <VStack direction={'row'}>
          <Text
            fontWeight="bold"
            fontSize={{ base: '40px', sm: '40px', md: '40px' }}
            px={{ base: '12', sm: '12', md: '64' }}
            fontFamily={'Reggae One'}
          >
            slides
          </Text>
          <Text fontWeight="bold" fontFamily={'Reggae One'}>
            かこにしゃべったこと
          </Text>
        </VStack>
        <Divider borderWidth={2} borderColor={'#B3D4FC'} />
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
