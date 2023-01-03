import { ButtonProps } from '@/components/type';
import { Text, Button } from '@chakra-ui/react';

const button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { text } = props;
  return (
    <Button
      fontFamily={'Reggae One'}
      variant="outline"
      as="button"
      borderColor={'#B3D4FC'}
      border="2px"
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
