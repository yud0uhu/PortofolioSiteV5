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
          endpoint: 'works',
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
    {
      resolve: `gatsby-source-figma`,
      options: {
        // For files:
        fileId: `FIGMA_FILE_ID`,
        // For images:
        nodeIds: [`FIGMA_NODE_IDS`],
        // optional for nodeIds: A number between 0.01 and 4, the image scaling factor
        scale: 1,
        // optional: A string enum for the image output format, can be jpg, png, svg, or pdf
        format: 'png',
        // For projects:
        projectId: `FIGMA_PROJECT_ID`,
        // Get an access token from Figma Account Settings.
        accessToken: `YOUR_FIGMA_ACCESS_TOKEN`,
      },
    },
  ],
  jsxRuntime: `automatic`,
  graphqlTypegen: true,
};

export default config;
