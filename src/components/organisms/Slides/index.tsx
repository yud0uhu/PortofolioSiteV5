import {
  Divider,
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  UnorderedList,
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
          slide
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={12}>
        <UnorderedList textAlign={'left'}>
          {data.nodes.map((node: allmicrocmsSlideProps, index: number) => (
            <Stack p={2} key={index}>
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
