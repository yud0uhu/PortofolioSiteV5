import {
  Divider,
  Spacer,
  Text,
  Box,
  Stack,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';
import UiCard from '@/components/atoms/UiCard/index';
import React from 'react';
import Slider from 'react-slick';

import Button from '@/components/atoms/Button/index';
import { useAllMicrocmsDailiuiMetadata } from '@/hooks/query/allMicrocmsDailiui';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
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
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const data = useAllMicrocmsDailiuiMetadata();
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });
  console.log(data);
  return (
    <>
      <Stack direction={'row'}>
        <Divider
          marginTop={6}
          w={{ base: 45, sm: 45, md: 180 }}
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
          Daily UI
        </Text>
      </Stack>
      <Stack marginTop={6}>
        <Box
          position={'relative'}
          height={{ base: '400px', md: '600px', sm: '400px' }}
          width={{ base: 'full', md: 'full', sm: 'full' }}
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
            colorScheme="teal"
            aria-label="left-arrow"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <ArrowLeftIcon w={6} h={6} />
          </IconButton>
          <IconButton
            colorScheme="teal"
            aria-label="right-arrow"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <ArrowRightIcon w={6} h={6} />
          </IconButton>
          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.nodes.map((node: allmicrocmsDailyuiProps, index: number) => (
              <UiCard image={node.image} key={index} />
            ))}
          </Slider>
        </Box>
        <Spacer />
      </Stack>
    </>
  );
};

export default Products;
