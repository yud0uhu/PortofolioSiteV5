import { Stack, Skeleton } from '@chakra-ui/react';

const HeroImage: React.FC = () => {
  return (
    <Stack
      textAlign={'center'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Stack></Stack>
      {/* <li>{data.edges}</li> */}
      <Skeleton
        justifyContent="center"
        alignItems="center"
        startColor="#70E1F5"
        endColor="#FFD194"
        width="900px"
        height="600px"
      />
      {/* <img src={Image} alt="Image" />; */}
      );
    </Stack>
  );
};
export default HeroImage;
