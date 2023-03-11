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
        <FaGithubSquare size="lg" color={'#40322A'} />
      </a>
      <Box px={2} />
      <a href={'https://twitter.com/yud0uhu'} target="_blank" rel="noreferrer">
        <FaTwitterSquare size="lg" color={'#40322A'} />
      </a>
      <Box px={2} />
      <a
        href={'https://hackteck.hatenablog.com/'}
        target="_blank"
        rel="noreferrer"
      >
        <Box px={2} />
        <SiHatenabookmark size="lg" color={'#40322A'} />
      </a>
      <a href={'https://zenn.dev/denham/'} target="_blank" rel="noreferrer">
        <Box m={2} width={{ base: '118px', md: '24px' }} margin-left={'12px'}>
          <ZennSvgIcon color={'#40322A'} />
        </Box>
      </a>
    </>
  );
};
export default IconLink;
