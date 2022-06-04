import { Stack, Divider, Text, Flex } from '@chakra-ui/react';
import ProfileBox from '../molecules/ProfileBox';
import HeaderBox from '../molecules/HeaderBox';
import ProductBox from '../molecules/ProductBox';
import React from 'react';

export default function Header() {
  return (
    <Stack>
      <HeaderBox />
      <Flex>
        <span>
          <Divider
            mt={12}
            w={180}
            borderWidth={5}
            borderColor={'#B3D4FC'}
            opacity="1"
          />
        </span>
        <Divider orientation="vertical" />
        <span>
          <Text
            fontWeight="bold"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            height="80px"
            justifyContent="left"
            position={'absolute'}
            px={6}
          >
            about me
          </Text>
        </span>
      </Flex>
      <Flex p={12}>
        <ProfileBox />
      </Flex>
      <Flex>
        <span>
          <Divider
            mt={12}
            w={180}
            borderWidth={5}
            borderColor={'#B3D4FC'}
            opacity="1"
          />
        </span>
        <Divider orientation="vertical" />
        <span>
          <Text
            fontWeight="bold"
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            height="80px"
            justifyContent="left"
            position={'absolute'}
            px={6}
          >
            product
          </Text>
        </span>
      </Flex>
      <Flex p={12}>
        <ProductBox />
      </Flex>
    </Stack>
  );
}
