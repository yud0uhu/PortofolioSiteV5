// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
type allmicrocmsDailyuiProps = {
  figma: string;
  title: string;
  image: string;
};
export default function uiCard(props: allmicrocmsDailyuiProps) {
  const { figma, title, image } = props;
  return (
    <Center py={6}>
      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <img src={image.url} alt={image} />
        </Box>
        <Stack>
          <Text
            color={'#B3D4FC'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            {title}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>
            <a href={figma}>{figma}</a>
          </Text>
        </Stack>
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text color={'gray.500'}></Text>
        </Stack>
      </Box>
    </Center>
  );
}
