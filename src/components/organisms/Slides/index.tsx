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
          marginTop={6}
          w={{ base: 45, sm: 45, md: 180 }}
          borderWidth={5}
          borderColor={'#B3D4FC'}
        />
        <Text
          fontWeight="bold"
          fontSize={{ base: 'xl', sm: 'xl', md: '3xl' }}
          justifyContent="left"
          position={'absolute'}
          px={52}
        >
          slide
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={6}>
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
