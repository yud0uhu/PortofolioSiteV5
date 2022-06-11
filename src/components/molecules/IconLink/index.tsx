import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@/components/atoms/Icon/index';
import HatenaBookmarkIcon from '@/static/cib_hatena-bookmark.png';
import ZennIcon from '@/static/simple-icons_zenn.png';
import React from 'react';
import { FaGithubSquare } from '@react-icons/all-files/fa/FaGithubSquare';
import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
export default function IconLink() {
  return (
    <>
      <a href={'https://github.com/'} target="_blank" rel="noreferrer">
        <FaGithubSquare size="100" color={'#40322A'} />
      </a>
      <a
        href={'https://twitter.com/denham95173179'}
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare size="100" color={'#40322A'} />
      </a>
      <a
        href={'https://hackteck.hatenablog.com/'}
        target="_blank"
        rel="noreferrer"
      >
        <Icon iconImageUrl={HatenaBookmarkIcon} marginLeft={4} />
      </a>
      <a
        href={'https://zenn.dev/denham/scraps'}
        target="_blank"
        rel="noreferrer"
      >
        <Icon iconImageUrl={ZennIcon} marginLeft={4} h={'48px'} w={'48px'} />
      </a>
    </>
  );
}
