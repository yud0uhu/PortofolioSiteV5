import { Box } from '@chakra-ui/react';
import React from 'react';

type IconProps = {
  iconImageUrl: string;
  marginLeft: number;
};

export const Icon: React.FC<IconProps> = ({ iconImageUrl, marginLeft }) => {
  return (
    <Box marginLeft={marginLeft}>
      <img src={iconImageUrl} alt={iconImageUrl} />
    </Box>
  );
};
