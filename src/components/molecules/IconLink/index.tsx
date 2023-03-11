import { Box } from '@chakra-ui/react';
import { SiHatenabookmark } from '@react-icons/all-files/si/SiHatenabookmark';
import { ZennSvgIcon } from '../../atoms/ZennSvgIcon';
import React from 'react';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
const IconLink: React.FC = () => {
  return (
    <>
      <a href={'https://github.com/yud0uhu'} target="_blank" rel="noreferrer">
        <Box mr={2} width={{ base: '32px', md: '108px' }}>
          <FaGithubSquare size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a href={'https://github.com/yud0uhu'} target="_blank" rel="noreferrer">
        <Box mr={2} width={{ base: '32px', md: '108px' }}>
          <FaTwitterSquare size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a
        href={'https://hackteck.hatenablog.com/'}
        rel="noreferrer"
        target="_blank"
      >
        <Box
          mr={2}
          mt={{ base: 0, sm: 2 }}
          width={{ base: '32px', md: '108px' }}
        >
          <SiHatenabookmark size="lg" color={'#40322A'} />
        </Box>
      </a>
      <a href={'https://zenn.dev/denham/'} rel="noreferrer" target="_blank">
        <Box
          mr={2}
          mt={{ base: 0, sm: 2 }}
          width={{ base: '32px', md: '108px' }}
        >
          <ZennSvgIcon color={'#40322A'} />
        </Box>
      </a>
    </>
  );
};
export default IconLink;
