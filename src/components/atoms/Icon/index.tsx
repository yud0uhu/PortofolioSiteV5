import { IconProps } from '@/components/type';
import { Box } from '@chakra-ui/react';

const Icon: React.FC<IconProps> = ({ iconImageUrl, marginLeft }: IconProps) => {
  return (
    <Box
      marginLeft={marginLeft}
      marginTop={2}
      width={{ base: '48px', md: '96px', sm: '48px' }}
    >
      <picture>
        <img src={iconImageUrl} alt={iconImageUrl} />
      </picture>
    </Box>
  );
};
export default Icon;
