import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Divider,
  Spacer,
  HStack,
  VStack,
} from '@chakra-ui/react';
import UiCard from '@/components/atoms/UiCard/index';

import Button from '@/components/atoms/Button/index';
import { useAllMicrocmsDailiuiMetadata } from '@/hooks/query/allMicrocmsDailiui';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import Slider from 'react-slick';

type allmicrocmsDailyuiProps = {
  figma: string;
  title: string;
  image: string;
};
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Products = () => {
  const data = useAllMicrocmsDailiuiMetadata();

  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  console.log(data);
  return (
    <>
      <HStack direction={'row'}>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
        <VStack direction={'row'}>
          <Text
            fontWeight="bold"
            fontSize={{ base: '40px', sm: '40px', md: '40px' }}
            px={{ base: '12', sm: '12', md: '64' }}
            fontFamily={'Reggae One'}
          >
            daily ui
          </Text>
          <Text fontWeight="bold" fontFamily={'Reggae One'}>
            せんりのみちもいっぽから
          </Text>
        </VStack>
        <Divider borderWidth={5} borderColor={'#B3D4FC'} />
      </HStack>
      <Stack marginTop={6}>
        <Box
          position={'relative'}
          height={'600px'}
          width={'full'}
          overflow={'hidden'}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <ArrowLeftIcon />
          </IconButton>
          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <ArrowRightIcon />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.nodes.map((node: allmicrocmsDailyuiProps, index: number) => (
              <UiCard image={node.image} key={index} title={node.title} />
            ))}
          </Slider>
        </Box>
        <Spacer />
      </Stack>
    </>
  );
};

export default Products;
