import { Box, Text } from '@chakra-ui/react';
import { ProfileIcon } from '../atoms/ProfileIcon';
import GitHubIcon from './../../static/jam_github.png';
import HatenaBookmarkIcon from './../../static/cib_hatena-bookmark.png';
import TwitterIcon from './../../static/fa_twitter-square.png';
import ZennIcon from './../../static/simple-icons_zenn.png';
import React from 'react';

export default function Profile() {
  return (
    <>
      <Box textAlign="left" marginLeft={4}>
        <Text fontWeight="bold" maxW={'2xl'}>
          0Yu(zero yu)
        </Text>
        <Text maxW={'xl'}>
          試される大地のサブカルオタク
          <br />
          Webやゲームエンジンでものづ
          <br />
          くりをするのが好きです
          <br />
        </Text>
      </Box>
      <ProfileIcon iconImageUrl={GitHubIcon} marginLeft={4} />
      <ProfileIcon iconImageUrl={TwitterIcon} marginLeft={4} />
      <ProfileIcon iconImageUrl={HatenaBookmarkIcon} marginLeft={4} />
      <ProfileIcon iconImageUrl={ZennIcon} marginLeft={4} />
    </>
  );
}
