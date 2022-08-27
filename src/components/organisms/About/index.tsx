import { Divider, Box, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';

const About = () => {
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
            aboutme
          </Text>
          <Text fontWeight="bold" fontFamily={'Reggae One'}>
            なかのひと
          </Text>
        </VStack>
        <Divider borderWidth={2} borderColor={'#B3D4FC'} />
      </HStack>
      <HStack direction={'column'} marginTop={2} marginBottom={12}>
        s
        <VStack direction={'row'} px={{ base: '12', sm: '12', md: '80' }}>
          <Heading size="lg" fontFamily={'Reggae One'}>
            0Yu(zero yu)
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'sm', md: 'xl' }}
            fontFamily={'Reggae One'}
          >
            試される大地のサブカルオタク
            <br />
            Webやゲームエンジンでものづくりをするのが好きです
            <br />
            <Box display="flex" flexDirection="row">
              <IconLink />
            </Box>
          </Text>
        </VStack>
      </HStack>
    </>
  );
};

export default About;
