import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useallMicrocmsWokrsMetadata = () => {
  const alldata = useStaticQuery(graphql`
    {
      allMicrocmsWorks {
        nodes {
          githubUrl
          productDatail
          productImage {
            height
            url
            width
          }
          productTitle
          productUrl
          productComposition
          productData
          sortIndex
        }
      }
    }
  `);
  return alldata.allMicrocmsWorks;
};
