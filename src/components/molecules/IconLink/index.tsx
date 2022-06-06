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
      <Icon iconImageUrl={GitHubIcon} marginLeft={4} />
      <Icon iconImageUrl={TwitterIcon} marginLeft={4} />
      <Icon iconImageUrl={HatenaBookmarkIcon} marginLeft={4} />
      <Icon iconImageUrl={ZennIcon} marginLeft={4} />
    </>
  );
}
