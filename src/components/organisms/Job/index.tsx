import {
  Divider,
  Box,
  Flex,
  Text,
  Stack,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import IconLink from '@/components/molecules/IconLink';
import React from 'react';

const Job = () => {
  return (
    <>
      <Stack direction={'row'}>
        <Divider
          marginTop={6}
          w={{ base: 45, sm: 45, md: 180 }}
          borderWidth={5}
          borderColor={'#B3D4FC'}
        />
        <Text
          fontWeight="bold"
          fontSize={{ base: 'xl', sm: 'xl', md: '3xl' }}
          justifyContent="left"
          position={'absolute'}
          px={52}
        >
          Intern & <br />
          HackaThon
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={6}>
        <UnorderedList
          textAlign={'left'}
          marginTop={{ base: '4', sm: '24', md: '24' }}
        >
          <ListItem>2022/05～ 合同会社DMM.com 内定者インターン</ListItem>
          <ListItem>2022/04～ クラウドファーム株式会社 インターン</ListItem>
          <ListItem>2022/04 クックパッド春の超絶技巧パンまつり</ListItem>
          <ListItem>
            2022/03 サイバーエージェント Web Speed Hackathon 2022
          </ListItem>
          <ListItem>2022/01 技育CAMPvol.13</ListItem>
          <ListItem>2021/12 JPHACKS 2021</ListItem>
          <ListItem>2021/11 東京ガスiネット Hackathon2021</ListItem>
          <ListItem>2021/09 DeNAオータムハッカソンインターン</ListItem>
          <ListItem>2021/08 技育展2021</ListItem>
          <ListItem>2021/03 OPEN HACK U 2020 (vol.4)</ListItem>
          <ListItem>
            2020/12～ 生活協同組合コープさっぽろ デジタル推進本部 インターン
          </ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
};

export default Job;
