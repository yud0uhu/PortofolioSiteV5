import type { GatsbyConfig } from 'gatsby';
const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: 'gatsby-source-microcms',
      options: {
      apiKey: process.env.API_KEY,
      serviceId: 'flyingcat',
      apis: [
        {
          endpoint: 'works'
        },
        {
          endpoint: "dailyui"
        },
        ],
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
  ],
  jsxRuntime: `automatic`,
  graphqlTypegen: true,
};

export default config;
