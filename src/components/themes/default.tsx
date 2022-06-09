// theme.js
import { extendTheme } from '@chakra-ui/react';

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    fonts: {
      heading: `'Reggae One', reggae-one`,
      body: `'Reggae One', reggae-one`,
    },
    global: {
      fontFamily: 'Reggae One',
      // styles for the `body`
      body: {
        bg: 'white',
        color: '#40322A',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});

export default theme;
