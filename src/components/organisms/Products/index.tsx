import {
  Divider,
  Spacer,
  Text,
  HStack,
  VStack,
  Stack,
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import CardCarousel from '@/components/atoms/CardCarousel/index';

import Slider from 'react-slick';
import { useallMicrocmsWokrsMetadata } from '@/hooks/query/allMicrocmsWorks';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

type microcmsWorksProps = {
  githubUrl: string;
  productDatail: string;
  productImage: { url: string };
  productTitle: string;
  productUrl: string;
  productComposition: string;
  productData: Date;
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
  const data = useallMicrocmsWokrsMetadata();
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // console.log(data);
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
            products
          </Text>
          <Text fontWeight="bold" fontFamily={'Reggae One'}>
            つくったもの
          </Text>
        </VStack>
        <Divider borderWidth={2} borderColor={'#B3D4FC'} />
      </HStack>
      <Stack marginTop={2}>
        <Box
          position={'relative'}
          height={'600px'}
          width={'full'}
          overflow={'hidden'}
          // _hover={{ opacity: 0.6 }}
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
            {data.nodes.map((node: microcmsWorksProps, i: number) => (
              <CardCarousel
                githubUrl={node.githubUrl}
                productDatail={node.productDatail}
                productImage={node.productImage}
                productTitle={node.productTitle}
                productUrl={node.productUrl}
                productComposition={node.productComposition}
                productData={node.productData}
                key={i}
              />
            ))}
          </Slider>
        </Box>
        <Spacer />
      </Stack>
      <Spacer />
    </>
  );
};

export default Products;
