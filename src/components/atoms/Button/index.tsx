import { Text, Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
  text: string;
};
const button = (props: Props) => {
  const { text } = props;
  return (
    <Button
      variant="outline"
      as="button"
      borderColor={'#B3D4FC'}
      border="2px"
      rounded={'full'}
      _hover={{
        bg: '#B3D4FC',
      }}
      py={6}
      px={14}
    >
      <Text color="#40322A">{text}</Text>
    </Button>
  );
};
export default button;
