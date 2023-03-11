import { Box, HStack } from '@chakra-ui/react';
import { SiHatenabookmark } from '@react-icons/all-files/si/SiHatenabookmark';
import { ZennSvgIcon } from '../../atoms/ZennSvgIcon';
import React from 'react';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
const IconLink: React.FC = () => {
  return (
    <HStack mt={2} mr={2}>
      <a href={'https://github.com/yud0uhu'} target="_blank" rel="noreferrer">
        <Box width={{ base: '32px', md: '52px' }}>
          <FaGithubSquare size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a href={'https://github.com/yud0uhu'} target="_blank" rel="noreferrer">
        <Box width={{ base: '32px', md: '52px' }}>
          <FaTwitterSquare size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a
        href={'https://hackteck.hatenablog.com/'}
        target="_blank"
        rel="noreferrer"
      >
        <Box width={{ base: '32px', md: '52px' }}>
          <SiHatenabookmark size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a href={'https://zenn.dev/denham/'} target="_blank" rel="noreferrer">
        <Box width={{ base: '32px', md: '52px' }}>
          <ZennSvgIcon color={'#40322A'} />
        </Box>
      </a>
    </HStack>
  );
};
export default IconLink;
