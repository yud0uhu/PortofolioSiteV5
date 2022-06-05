// theme.js
import { extendTheme } from '@chakra-ui/react';

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        // fontFamily: 'Source Code Pro',
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
