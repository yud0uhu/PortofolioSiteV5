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
          marginTop={12}
          w={{ base: 45, sm: 90, md: 180 }}
          borderWidth={5}
          borderColor={'#B3D4FC'}
          opacity="1"
        />
        <Text
          fontWeight="bold"
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          justifyContent="left"
          position={'absolute'}
          px={48}
        >
          job
        </Text>
      </Stack>
      <Stack direction={'row'} marginTop={12}>
        <UnorderedList textAlign={'left'}>
          <ListItem>2022/05～ 合同会社DMM.com 内定者インターン</ListItem>
          <ListItem>2022/04～ クラウドファーム株式会社 インターン</ListItem>
          <ListItem>
            2020/12～ 生活協同組合コープさっぽろ デジタル推進本部 インターン
          </ListItem>
        </UnorderedList>
      </Stack>
    </>
  );
};

export default Job;
