// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Img,
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
    <Center py={2}>
      {/* TODO: カルーセルにする？ */}
      <Box
        maxW="sm"
        borderWidth="1px"
        h="400px"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box mt={-6} mx={-6} mb={6} pos={'relative'}>
          <Img src={image.url} alt={image} />
        </Box>
      </Box>
    </Center>
  );
}
