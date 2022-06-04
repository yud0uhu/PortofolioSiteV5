import { Box } from '@chakra-ui/react';
import React from 'react';

type ProfileIconProps = {
  iconImageUrl: string;
  marginLeft: number;
};

export const ProfileIcon: React.FC<ProfileIconProps> = ({
  iconImageUrl,
  marginLeft,
}) => {
  return (
    <Box marginLeft={marginLeft}>
      <img src={iconImageUrl} alt={iconImageUrl} />
    </Box>
  );
};
