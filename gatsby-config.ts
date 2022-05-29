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
    }
  ],
  jsxRuntime: `automatic`,
  graphqlTypegen: true,
};

export default config;
