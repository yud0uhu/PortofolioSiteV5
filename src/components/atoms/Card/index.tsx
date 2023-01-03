import {
  Box,
  Center,
  Heading,
  Text,
  Img,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import { allmicrocmsWorksProps } from '@/components/type';

const Card: React.FC<allmicrocmsWorksProps> = (
  props: allmicrocmsWorksProps,
) => {
  const { githubUrl, productDatail, productImage, productData } = props;
  return (
    <Center py={2}>
      <LinkBox
        h="300px"
        width="300px"
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
      >
        <Box>
          <picture>
            <Img
              overflow={'hidden'}
              src={productImage.url}
              maxH={'150px'}
              width={'300px'}
              alt={productDatail}
            />
          </picture>
        </Box>
        <Box as="time" dateTime="${productData}">
          <>{productData}</>
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href={githubUrl}>GitHub</LinkOverlay>
        </Heading>
        <Text as="h4" lineHeight="tight" noOfLines={1}>
          {productDatail}
        </Text>
      </LinkBox>
    </Center>
  );
};
export default Card;
