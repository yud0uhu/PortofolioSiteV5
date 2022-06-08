import { Box } from '@chakra-ui/react';
import React from 'react';

type IconProps = {
  iconImageUrl: string;
  marginLeft: number;
};

export const Icon: React.FC<IconProps> = ({ iconImageUrl, marginLeft }) => {
  return (
    <Box
      marginLeft={marginLeft}
      marginTop={2}
      width={{ base: '48px', md: '96px', sm: '48px' }}
    >
      <img src={iconImageUrl} alt={iconImageUrl} />
    </Box>
  );
};
