import { Divider, Box, Flex, Text, Stack } from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';

const About = () => {
  return (
    <>
      <Stack direction={'row'}>
        <Divider
          marginTop={6}
          w={{ base: 90, sm: 90, md: 180 }}
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
          about me
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={6}>
        <Box px={2}>
          <Text fontWeight="bold" fontSize={{ base: 'md', sm: 'md' }}>
            0Yu(zero yu)
          </Text>
          <Text fontSize={{ base: 'md', sm: 'md' }}>
            試される大地のサブカルオタク
            <br />
            Webやゲームエンジンでものづくりをするのが好きです
            <br />
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          maxWidth={{ base: 'md', sm: 'sm' }}
        >
          <IconLink />
        </Box>
      </Stack>
    </>
  );
};

export default About;
