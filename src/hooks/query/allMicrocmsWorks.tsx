import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const useMicrocmsWokrsMetadata = () => {
  const data = useStaticQuery(graphql`
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
  console.log(data);
  return data.allMicrocmsWorks;
};
