import { Divider, Box, Flex, Text, Stack } from '@chakra-ui/react';
import IconLink from '../../molecules/IconLink';
import React from 'react';

const Slides = () => {
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
        <Box textAlign="left" px={12}>
          <Text fontWeight="bold" fontSize={'2xl'}>
            0Yu(zero yu)
          </Text>
          <Text>
            試される大地のサブカルオタク
            <br />
            Webやゲームエンジンでものづ
            <br />
            くりをするのが好きです
            <br />
          </Text>
        </Box>
        <Flex>
          <IconLink />
        </Flex>
      </Stack>
    </>
  );
};

export default Slides;
