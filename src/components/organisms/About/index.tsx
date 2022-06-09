import {
  Divider,
  Box,
  Flex,
  Text,
  Stack,
  HStack,
  Heading,
} from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';

const About = () => {
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
          about me
        </Text>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
      </HStack>
      <HStack direction={'column'} marginTop={2} marginBottom={12}>
        <Box paddingStart={{ base: '12', sm: '12', md: '96' }}>
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
        </Box>
      </HStack>
    </>
  );
};

export default About;
