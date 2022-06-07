import { Divider, Box, Flex, Text, Stack } from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';

const About = () => {
  return (
    <>
      <Stack direction={'row'}>
        <Divider
          marginTop={12}
          w={{ base: 90, sm: 90, md: 180 }}
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
          about me
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={12}>
        <Box textAlign="left" px={12}>
          <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'xl', sm: 'sm' }}>
            0Yu(zero yu)
          </Text>
          <Text fontSize={{ base: 'xl', sm: 'sm', md: 'xl' }}>
            試される大地のサブカルオタク
            <br />
            Webやゲームエンジンでものづくりをするのが好きです
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

export default About;
