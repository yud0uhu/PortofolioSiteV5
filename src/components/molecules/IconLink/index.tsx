import { Box, Text } from '@chakra-ui/react';
import { Icon } from '@/components/atoms/Icon/index';
import GitHubIcon from '@/static/jam_github.png';
import HatenaBookmarkIcon from '@/static/cib_hatena-bookmark.png';
import TwitterIcon from '@/static/fa_twitter-square.png';
import ZennIcon from '@/static/simple-icons_zenn.png';
import React from 'react';

export default function IconLink() {
  return (
    <>
      <a href={'https://github.com/'} target="_blank" rel="noreferrer">
        <Icon iconImageUrl={GitHubIcon} marginLeft={4} h={'48px'} w={'48px'} />
      </a>
      <a
        href={'https://twitter.com/denham95173179'}
        target="_blank"
        rel="noreferrer"
      >
        <Icon iconImageUrl={TwitterIcon} marginLeft={4} h={'48px'} w={'48px'} />
      </a>
      <a
        href={'https://hackteck.hatenablog.com/'}
        target="_blank"
        rel="noreferrer"
      >
        <Icon
          iconImageUrl={HatenaBookmarkIcon}
          marginLeft={4}
          h={'48px'}
          w={'48px'}
        />
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
