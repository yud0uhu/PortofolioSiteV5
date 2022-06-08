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
    <Box
      height={{ base: '400px', md: '600px', sm: '400px' }}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize={{ base: '400px', md: 'cover', sm: '400px' }}
      backgroundImage={image.url}
    />
  );
}
